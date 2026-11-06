# Development Setup

## Requirements

- Java 21 and Maven 3.9+
- Node.js 20+ and npm
- Python 3.12+
- Go 1.24+
- Docker Engine with the Compose plugin

## Local services

Copy `.env.example` to `.env` and change the local passwords. Start dependencies with `docker compose up --build`. PostgreSQL, Redis, MinIO, Kafka and RabbitMQ use persistent named volumes. MinIO's console is at `http://localhost:9001`; RabbitMQ management is at `http://localhost:15672`.

## Applications

- Java backend: `cd backend; mvn spring-boot:run` (health: `/actuator/health`)
- AI service: `cd ai; python -m venv .venv`; install `requirements.txt`; run `uvicorn app.main:app --reload` (health: `/health/live`)
- Web app: `cd frontend; npm install; npm run dev`
- Go adapter: `cd infrastructure/event-adapter; go run .` (health: `/health/live`)

The Go service currently exposes only liveness; it does not yet adapt Kafka events to RabbitMQ. The AI health endpoints do not imply inference readiness. Do not expose development ports or use sample credentials in a shared or production environment.
