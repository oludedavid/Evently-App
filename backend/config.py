import redis
from os import environ

from decouple import config

from dotenv import load_dotenv

load_dotenv("variables.env")
load_dotenv("redis.env")

class ApplicationConfig:
    SECRET_KEY = config("SECRET_KEY", default="guess-me")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = config("DATABASE_URI", default=r"sqlite:///users.db")
    #enable session config
    SESSION_TYPE = "redis"
    #so that session won't be permenant
    SESSION_PERMANENT = False
    #use secret key signer
    SESSION_USE_SIGNER = True
    #set the path
    SESSION_REDIS = redis.from_url(f"redis://:{config('REDIS_PASSWORD', default='')}@redis:6379")


