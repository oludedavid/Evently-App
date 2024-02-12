from flask import Flask, request, jsonify, make_response, session
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_session import Session
from os import environ
from decouple import config
from dotenv import load_dotenv
from config import ApplicationConfig
from models import db, User, Event

load_dotenv()

#Create the flask app instance
app = Flask(__name__)
CORS(app, supports_credentials=True)
bcrypt = Bcrypt(app)
app.config.from_object(config("APP_SETTINGS"))
print(app.config['SECRET_KEY'])
Session(app)

# User Registration
@app.route("/api/register", methods=["POST"])
def register_user():
    #gets email and password input
    email = request.json["userEmail"]
    name = request.json["userName"]
    password = request.json["userPassword"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, name=name, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id
    return make_response(jsonify({
        "id": new_user.id,
        "email": new_user.email,
        "name": new_user.name,
        "success": "It was successful"
    }))


@app.route("/api/login", methods=["POST"])
def login_user():
    email = request.json["userEmail"]
    password = request.json["userPassword"]

    user = User.query.filter_by(email=email).first()
    stored_hash_bytes = user.password.encode('utf-8')
   
    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(stored_hash_bytes, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id
    return make_response(jsonify({
        "id": user.id,
        "email": user.email,
        "success": "your login was successfully"
    })) 


@app.route("/logout", methods=["POST"])
def logout_user():
    # Safely remove 'user_id' from session, if it exists
    session.pop("user_id", None)  # None ensures no error if 'user_id' doesn't exist

    # Return a proper JSON response with status code 200
    return jsonify({"message": "Logged out successfully"}), 200


@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return make_response(jsonify({
        "id": user.id,
        "email": user.email,
        "name": user.name,
    })) 

db.init_app(app)
with app.app_context():
  db.create_all()