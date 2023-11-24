from typing import Annotated

from fastapi import APIRouter, Depends

from server_config import get_db
from sql.sqlutils import PostgresDb

DUMMY_DATA = {
    "reviews": [
        {
            "id": 1,
            "title": "Elden Ring",
            "rating": 5,
            "description": "My favourite open world game ever",
        },
        {
            "id": 2,
            "title": "Returnal",
            "rating": 4.5,
            "description": "One of my favourite action games",
        },
        {
            "id": 3,
            "title": "Spiderman: Across the Spiderverse",
            "rating": 5,
            "description": "Unbelievable animation",
        },
    ],
}

PREFIX = "/reviews"
router = APIRouter(prefix=PREFIX, tags=[PREFIX[1:]])


@router.get("/")
async def read_reviews(db: Annotated[PostgresDb, Depends(get_db)]):
    return DUMMY_DATA


@router.get("/{review_id}")
async def read_review(review_id: str, db: Annotated[PostgresDb, Depends(get_db)]):
    return {review_id: "This is an old review"}


@router.put("/{review_id}")
async def update_review(review_id: str, db: Annotated[PostgresDb, Depends(get_db)]):
    return {review_id: "This is a new review"}
