import argparse

import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from server_config import ServerConfig
from routers import reviews, users, root

import firebase_admin
from firebase_admin import credentials


def run_server(config: ServerConfig) -> None:
    app = FastAPI()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(users.router)
    app.include_router(reviews.router)
    app.include_router(root.router)

    cred = credentials.Certificate("secrets/firebase-service-account.json")
    firebase_admin.initialize_app(cred)

    uvicorn.run(
        app, host=config.ip, port=config.port, log_level="info", proxy_headers=True
    )


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Host parameters")
    parser.add_argument("-i", "--ip", default="127.0.0.1", required=False)
    parser.add_argument("-p", "--port", default=5000, required=False)
    args = parser.parse_args()

    run_server(ServerConfig(ip=args.ip, port=int(args.port)))
