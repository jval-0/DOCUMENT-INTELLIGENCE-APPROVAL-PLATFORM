# Architecture Decisions

## ADR-001: Follow the Spring Boot 3.x compatibility note

`Agents.md` lists Spring Boot 4.1.2 in its baseline table, then explicitly instructs implementations to pin a supported Spring Boot 3.x release. This foundation pins Spring Boot 3.5.16 with Java 21 to honor that implementation-specific compatibility direction. Spring's release index lists Spring Boot 4.1.2 as a release, but that does not override the document's more specific instruction to use 3.x. Revisit only with a verified, compatible migration decision.

## ADR-002: Keep phase boundaries

The initial commit-sized foundation establishes independently buildable service boundaries and a local dependency environment. Business authority remains in Java; AI and infrastructure services expose only health checks until their respective phases implement real contracts.

## ADR-003: Local Compose is not production

Compose provides a repeatable local dependency set. Production deployment must separately implement TLS, secret management, network isolation, persistence, backups, resource policies and recovery.
