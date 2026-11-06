# Architecture Overview

The application uses a React/TypeScript web client, a Java 21 modular monolith for business authority, Python/FastAPI for AI/ML, and Go for selected infrastructure adapters. PostgreSQL is authoritative; MinIO stores binary objects; Redis is only a cache. Kafka distributes business events and RabbitMQ carries retryable jobs. AI services cannot make approval decisions.

See `Agents.md` for the full architecture baseline and governance constraints. The local Compose environment is for development only and is not a production deployment profile.
