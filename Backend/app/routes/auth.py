from fastapi import APIRouter

router = APIRouter()

@router.post("/register")
def register():
    return {"msg": "register works"}

@router.post("/login")
def login():
    return {"msg": "login works"}