from fastapi import FastAPI
from auth import router as auth_router
from itemapi import router as item_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(item_router, prefix="/items", tags=["items"])

