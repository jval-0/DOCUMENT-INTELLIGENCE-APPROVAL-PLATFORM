# Deployment Guide

The current Compose file is a local development foundation only. It has no production secrets management, TLS ingress, persistent-volume policy, backup configuration, resource limits or HA guarantees.

Production deployment remains Phase 12 and must add Kubernetes/Helm manifests, private networking, TLS, managed secrets, health and resource policies, observability, backup/restore procedures, GHCR images and GitHub Actions promotion workflows. No cloud deployment has been performed.
