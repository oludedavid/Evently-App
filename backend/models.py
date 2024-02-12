from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    
    # Relationship - One-to-Many: User to Events
    events = db.relationship('Event', backref='user', lazy=True)

    #Define a json for this model so that we get a JSOn anytime we return the user it is in a json format
    def json(self):
        return {'id': self.id, 'name': self.name, 'email': self.email}


class Event(db.Model):
    __tablename__ = 'events'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_done = db.Column(db.Boolean, default=False, nullable=False)
    
    # Foreign Key to link to the User
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    #Define a json for this model so that we get a JSOn anytime we return the user it is in a json format
    def json(self):
        return {'id': self.id, 'name': self.name, 'description': self.description, 'created_on': self.created_on, 'updated_on': self.updated_on, 'is_done': self.is_done}

