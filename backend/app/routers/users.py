import uuid
from fastapi import APIRouter
from pydantic import BaseModel
from firebase_admin import auth

PREFIX = "/users"
router = APIRouter(prefix=PREFIX, tags=[PREFIX[1:]])


class SignupInfo(BaseModel):
    email: str
    password: str
    display_name: str


@router.post("/signup")
async def signup_user(info: SignupInfo):
    user = auth.create_user(
        uid=uuid.uuid4(),
        email=info.email,
        password=info.password,
        display_name=info.display_name,
        disabled=False,
    )
    print("Sucessfully created new user")

    return {"user": user}


@router.get("/{username}")
async def get_user(username: str):
    return {"username": username}
