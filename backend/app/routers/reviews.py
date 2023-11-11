from typing import Annotated

from fastapi import APIRouter, Depends

from server_config import get_db
from sql.sqlutils import PostgresDb

PREFIX = "/reviews"

router = APIRouter(
    prefix=PREFIX,
    tags=["reviews"],
    responses={404: {"description": "Not found"}},
)

@router.get("/")
async def read_reviews(db: Annotated[PostgresDb, Depends(get_db)]):
    return [{"1": "Eat"}, {"2": "Sleep"}]


@router.get("/{review_id}")
async def read_review(review_id: str, db: Annotated[PostgresDb, Depends(get_db)]):
    return {review_id: "This is a review"}


@router.put("/{review_id}",
            tags=["custom"],
            responses={403: {"description": "Operation forbidden"}},
)
async def update_note(review_id: str, db: Annotated[PostgresDb, Depends(get_db)]):
    return []
