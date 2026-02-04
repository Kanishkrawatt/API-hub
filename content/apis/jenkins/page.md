---
title: Jenkins API
product_name: Jenkins
logo: /api-explorer/logos/jenkins.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: Jenkins API
secondary_keywords:
  - CI/CD API
  - Build Automation API
  - Pipeline API
  - Continuous Integration API
description: >-
  Control Jenkins programmatically. Trigger builds, manage jobs, query build
  status, configure pipelines, and automate CI/CD workflows via REST and CLI
  APIs.
pricing_free_tier: true
pricing_starting_from: Free (open source)
pricing_notes: >-
  Completely free and open source. Self-hosted or cloud-hosted (CloudBees offers
  managed Jenkins with paid support).
auth_type: basic
rate_limits: No rate limits. Self-hosted server capacity determines throughput.
docs_url: 'https://www.jenkins.io/doc/book/using/remote-access-api'
pricing_url: 'https://www.jenkins.io'
alternatives:
  - name: CircleCI
    docs_url: 'https://circleci.com/docs/api/v2'
  - name: GitHub Actions
    docs_url: 'https://docs.github.com/actions'
  - name: GitLab CI
    docs_url: 'https://docs.gitlab.com/ee/api'
last_verified_date: '2026-02-04'
popularity_score: 85
faq:
  - q: Is Jenkins API free?
    a: >-
      Yes, Jenkins is completely free and open source. API access unlimited on
      self-hosted instances.
  - q: How do I authenticate?
    a: >-
      Use HTTP Basic Auth with username and API token. Generate tokens in
      Jenkins user settings.
  - q: Can I trigger builds remotely?
    a: >-
      Yes, trigger builds with parameters, get build status, retrieve logs, and
      manage build queue.
  - q: What about plugins?
    a: >-
      Yes, manage plugins, install/update/remove plugins, and interact with
      plugin-specific APIs.
auth_setup_steps:
  - Log in to Jenkins instance
  - Go to User Profile > Configure
  - Generate API Token
  - Copy token
  - 'Use Basic Auth with username:token in Authorization header'
---

Jenkins API provides comprehensive programmatic access to the leading open-source automation server. Trigger builds, manage jobs and pipelines, query build status, and integrate Jenkins into your development workflows and custom tools.

### What you can build

- Custom CI/CD dashboards
- Build trigger automation
- Deployment orchestration
- Pipeline management tools
- Build result aggregators
- Status notification systems
- Job configuration managers
- Multi-instance coordinators
