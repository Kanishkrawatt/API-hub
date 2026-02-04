---
title: Docker Hub API
product_name: Docker Hub
logo: /api-explorer/logos/docker-hub.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: Docker Hub API
secondary_keywords:
  - Container Registry API
  - Docker Image API
  - Repository API
  - Container API
description: >-
  Manage Docker images, repositories, and organizations on Docker Hub. Push/pull
  images, manage tags, configure webhooks, and automate container workflows
  programmatically.
pricing_free_tier: true
pricing_starting_from: Free (1 private repo)
pricing_notes: >-
  Free tier 1 private repo, unlimited public. Pro $9/mo (unlimited private),
  Team $15/user/mo, Business $24/user/mo.
auth_type: bearer
rate_limits: >-
  100 pulls per 6 hours for anonymous users. 200 pulls per 6 hours for
  authenticated free users. Unlimited on paid plans.
docs_url: 'https://docs.docker.com/docker-hub/api/latest'
pricing_url: 'https://www.docker.com/pricing'
alternatives:
  - name: GitHub Container Registry
    docs_url: >-
      https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry
  - name: AWS ECR
    docs_url: 'https://docs.aws.amazon.com/ecr'
  - name: Google Artifact Registry
    docs_url: 'https://cloud.google.com/artifact-registry/docs'
last_verified_date: '2026-02-04'
popularity_score: 88
faq:
  - q: Is Docker Hub API free?
    a: >-
      Yes, free tier with 1 private repository and unlimited public repos. Rate
      limits apply (200 pulls/6hrs).
  - q: Can I automate image builds?
    a: >-
      Yes, configure automated builds from GitHub/Bitbucket, set build rules,
      and trigger builds via webhooks.
  - q: What about CI/CD integration?
    a: >-
      Yes, push/pull images in CI/CD pipelines, manage tags, and configure
      webhooks for deployment automation.
  - q: Can I manage organizations?
    a: >-
      Yes, manage teams, permissions, repositories, and billing for Docker
      organizations via API.
auth_setup_steps:
  - Create Docker Hub account
  - Go to Account Settings > Security
  - Generate new access token
  - Set token permissions
  - Use token for docker login or API Authorization Bearer header
---

Docker Hub API enables programmatic management of the world's largest container registry. Automate image builds, manage repositories and tags, configure webhooks, and integrate Docker workflows into your CI/CD pipelines.

### What you can build

- CI/CD pipeline integrations
- Container image scanners
- Repository management tools
- Automated build systems
- Image vulnerability checkers
- Container registry dashboards
- Tag cleanup automation
- Multi-registry sync tools
