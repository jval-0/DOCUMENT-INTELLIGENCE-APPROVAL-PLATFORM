# Implementation Plan

The implementation follows the dependency order in `Agents.md`.

1. **Project foundation:** repository layout, pinned starter dependencies, local service configuration, environment template, development documentation.
2. **Database and identity:** PostgreSQL schema/migrations, organization model, authentication, authorization, and audit foundation.
3. **Document management:** metadata, secure MinIO storage, versions, templates, preview/download.
4. **Approval workflow:** definitions, assignments, reviews, decisions, audit, notifications.
5. **Event infrastructure:** outbox, versioned events, Kafka, RabbitMQ jobs, Go adapter.
6. **Real-time notifications:** persistence, authorization, STOMP updates, retries.
7. **AI document intelligence:** secured Python APIs, extraction and schema validation.
8. **Model tuning:** dataset review, LoRA/QLoRA, evaluation, versioning and rollback.
9. **Policy RAG:** isolated synthetic policy corpus, BGE-M3, pgvector, citations and refusal behavior.
10. **PDF/signatures:** finalization checks, visual signatures/stamps, checksums and storage.
11. **Observability:** metrics, logs, traces, dashboards and alerting.
12. **Cloud deployment:** Kubernetes, ingress/TLS, secrets, CI/CD and GHCR.
13. **Production hardening:** security, performance, resilience, recovery and acceptance evidence.

Each phase must be verified before it is marked tested. Production acceptance is separate from local development readiness.
