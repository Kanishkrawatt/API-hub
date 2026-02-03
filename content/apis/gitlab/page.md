---
title: GitLab API
product_name: GitLab
logo: /api-hub/logos/gitlab.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: GitLab API
secondary_keywords:
  - Git Repository API
  - DevOps API
  - CI/CD API
  - Code Management API
description: >-
  Access GitLab repositories, issues, merge requests, CI/CD pipelines, and
  DevOps workflows programmatically through comprehensive REST and GraphQL APIs.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Free tier unlimited public/private repos. Premium $29/user/month, Ultimate
  $99/user/month for advanced features.
auth_type: api_key
rate_limits: >-
  10 requests per second per IP; 2,000 requests per minute per user. Higher
  limits on paid tiers.
docs_url: 'https://docs.gitlab.com/ee/api'
pricing_url: 'https://about.gitlab.com/pricing'
alternatives:
  - name: GitHub
    docs_url: 'https://docs.github.com/rest'
  - name: Bitbucket
    docs_url: 'https://developer.atlassian.com/cloud/bitbucket'
  - name: Azure DevOps
    docs_url: 'https://learn.microsoft.com/en-us/rest/api/azure/devops'
last_verified_date: '2026-02-03'
popularity_score: 84
faq:
  - q: Is GitLab API free?
    a: >-
      Yes, free tier includes unlimited repos and API access. Paid plans unlock
      advanced features like code owners and security scanning.
  - q: REST or GraphQL?
    a: >-
      Both available. REST API is mature and comprehensive. GraphQL API offers
      flexible querying with fewer requests.
  - q: Can I automate CI/CD pipelines?
    a: >-
      Yes, full API access to trigger pipelines, check status, view jobs, and
      manage runners programmatically.
  - q: Self-hosted vs GitLab.com?
    a: >-
      API works with both. Self-hosted instances have same API endpoints.
      Configure base URL accordingly.
auth_setup_steps:
  - Sign in to GitLab account
  - Go to User Settings > Access Tokens
  - Click Create Personal Access Token
  - Set name and expiration
  - 'Select required scopes (api, read_api, etc.)'
  - Generate and copy token
  - Use token in Authorization header or private-token parameter
---

GitLab API provides comprehensive access to GitLab's complete DevOps platform. Manage repositories, issues, merge requests, CI/CD pipelines, containers, and security features programmatically through REST and GraphQL APIs.

### What you can build

- Custom DevOps dashboards
- Automated CI/CD workflows
- Project management tools
- Code review automation
- Security scanning integrations
- Release management systems
- Team productivity analytics
- Repository migration tools
