# API Documentation

## Initial service checks

| Service | Method and path | Purpose |
|---|---|---|
| Java | `GET /actuator/health` | Spring Boot health endpoint |
| Python | `GET /health/live` | AI process liveness |
| Python | `GET /health/ready` | Initial process readiness (no model loaded) |
| Go | `GET /health/live` | Infrastructure adapter liveness |

Business API contracts are not yet implemented. OpenAPI contracts will be added with their owning modules. AI endpoints will remain internal and will require authenticated service-to-service access before business use.
