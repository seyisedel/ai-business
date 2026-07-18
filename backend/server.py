# AI for Nigerian Businesses — Frontend-only landing page.
# Supervisor expects a backend process; this is an intentionally minimal FastAPI
# app that returns a health check so /api routes don't 502.
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI for Nigerian Businesses (placeholder)")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "ai-for-nigerian-businesses"}


@app.get("/api")
def root():
    return {"message": "Landing page is frontend-only. Backend is a placeholder."}
