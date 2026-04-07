from fastapi import FastAPI
from app.routes import auth, tasks

app = FastAPI()

@app.get("/")
def root():
    return {"status": "ok"}

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/test123")
def test():
    return {"msg": "TEST OK"}

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(tasks.router, prefix="/tasks", tags=["tasks"])