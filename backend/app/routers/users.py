from fastapi import APIRouter
from pydantic import BaseModel
from firebase_admin import auth

PREFIX = "/users"

router = APIRouter(
    prefix=PREFIX,
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


class SignupInfo(BaseModel):
    email: str
    password: str
    display_name: str


@router.post("/signup", tags=["users"])
async def signup_user(info: SignupInfo):
    # user = auth.create_user(
    #     email=info.email,
    #     password=info.password,
    #     display_name=info.display_name,
    #     disabled=False,
    # )
    print("Sucessfully created new user: {0}".format(user.uid))

    return [{"username": "Riz"}, {"username": "Rizwan"}]


@router.get("/me", tags=["users"])
async def read_user_me():
    return {"username": "Riz"}


@router.get("/{username}", tags=["users"])
async def read_user(username: str):
    return {"username": username}
