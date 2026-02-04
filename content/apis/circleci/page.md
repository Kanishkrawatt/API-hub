---
title: CircleCI API
product_name: CircleCI
logo: /api-explorer/logos/circleci.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: CircleCI API
secondary_keywords:
  - CI/CD API
  - Continuous Integration API
  - Build Automation API
  - Pipeline API
description: >-
  Manage CircleCI pipelines, workflows, and builds programmatically. Automate
  CI/CD processes, trigger builds, and monitor deployment pipelines.
pricing_free_tier: true
pricing_starting_from: 'Free (6,000 build minutes/mo)'
pricing_notes: >-
  Free tier 6K minutes/mo. Performance $15/mo (25K mins), Scale $2K/mo (200K
  mins), Server custom. API included in all plans.
auth_type: api_key
rate_limits: >-
  API v2 - no strict rate limits but fair use policy applies. Excessive usage
  may be throttled.
docs_url: 'https://circleci.com/docs/api/v2'
pricing_url: 'https://circleci.com/pricing'
alternatives:
  - name: GitHub Actions
    docs_url: 'https://docs.github.com/actions'
  - name: GitLab CI
    docs_url: 'https://docs.gitlab.com/ee/api'
  - name: Jenkins
    docs_url: 'https://www.jenkins.io/doc/book/using/remote-access-api'
last_verified_date: '2026-02-04'
popularity_score: 82
faq:
  - q: Is CircleCI API free?
    a: >-
      Yes, API access included in free tier (6,000 build minutes per month for
      open source and private projects).
  - q: What can I do with the API?
    a: >-
      Trigger pipelines, get build status, manage contexts/env vars, retrieve
      artifacts, cancel workflows, and more.
  - q: Can I trigger builds programmatically?
    a: >-
      Yes, trigger pipelines for specific branches or parameters. Useful for
      custom automation workflows.
  - q: What about webhooks?
    a: >-
      Yes, webhooks available to receive notifications about workflow and job
      events.
auth_setup_steps:
  - Create CircleCI account
  - 'Connect GitHub, Bitbucket, or GitLab'
  - Go to User Settings > Personal API Tokens
  - Create new token
  - Use token in Circle-Token header or Authorization Bearer
---

CircleCI API provides comprehensive access to one of the leading CI/CD platforms. Automate build processes, manage pipelines, retrieve build artifacts, and integrate continuous integration into your development workflows.

### What you can build

- CI/CD automation tools
- Build status dashboards
- Deployment orchestration
- Testing result aggregators
- Pipeline monitoring systems
- Custom webhook handlers
- Build artifact managers
- Release automation tools
