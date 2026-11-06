from fastapi import FastAPI

app = FastAPI(
    title="Document Platform AI Service",
    version="0.1.0",
    description="Private AI service boundary; business authority remains in Java.",
)


@app.get("/health/live", tags=["health"])
def liveness() -> dict[str, str]:
    return {"status": "UP"}


@app.get("/health/ready", tags=["health"])
def readiness() -> dict[str, str]:
    return {"status": "UP"}
