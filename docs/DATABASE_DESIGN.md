# Database Design

PostgreSQL is the source of truth for business records. The Java application runs versioned Flyway migrations, beginning with enabling pgvector. Automatic ORM schema generation is not a deployment strategy.

The initial migrations enable pgvector and create organization, department, office, user, role, permission, session and append-only audit foundations. Composite organization-scoped foreign keys prevent department, office and role assignments from crossing organization boundaries. Planned domains still include document/version, template, workflow, approval, signature, policy, RAG, notification and AI processing metadata. Organization isolation must also be enforced by Java authorization, with PostgreSQL row-level security considered as defense in depth. Redis is never authoritative; MinIO stores binaries and PostgreSQL stores metadata and object keys.
