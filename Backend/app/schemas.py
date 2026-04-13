from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class TaskCreate(BaseModel):
    title: str


class TaskUpdate(BaseModel):
    title: Optional[str] = None
    completed: Optional[bool] = None


class TaskOut(BaseModel):
    id: int
    title: str
    completed: bool
    created_at: datetime

    class Config:
        from_attributes = True