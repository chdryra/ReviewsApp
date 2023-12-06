import uuid
from fastapi import APIRouter
from pydantic import BaseModel
from firebase_admin import auth

PREFIX = "/users"
router = APIRouter(prefix=PREFIX, tags=[PREFIX[1:]])


class SignUpInfo(BaseModel):
    uid: str


class SignInInfo(BaseModel):
    uid: str


@router.post("/signup")
async def signup_user(info: SignUpInfo):
    user = auth.get_user(info.uid)
    print("Successfully created user: {0}".format(user))
    return {"user": user}


@router.post("/signin")
async def signin_user(info: SignInInfo):
    user = auth.get_user(info.uid)
    print("Successfully fetched user: {0}".format(user))
    return {"user": user}


@router.get("/{username}")
async def get_user(username: str):
    return {"username": username}
