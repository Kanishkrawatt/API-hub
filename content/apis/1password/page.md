---
title: 1Password API
product_name: 1Password
logo: /api-explorer/logos/1password.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: 1Password API
secondary_keywords:
  - Password Manager API
  - Secrets Management API
  - Credentials API
  - Vault API
description: >-
  Access 1Password vaults, items, and secrets programmatically. Integrate
  password management and secrets into applications, CI/CD pipelines, and
  workflows.
pricing_free_tier: false
pricing_starting_from: $19.95/5 users/month
pricing_notes: >-
  Starter $19.95/5 users/mo, Business $7.99/user/mo, Enterprise custom. API
  included. 1Password CLI free for all users.
auth_type: bearer
rate_limits: No strict published limits. Designed for reasonable automation usage.
docs_url: 'https://developer.1password.com'
pricing_url: 'https://1password.com/pricing'
alternatives:
  - name: Bitwarden
    docs_url: 'https://bitwarden.com/help/api'
  - name: HashiCorp Vault
    docs_url: 'https://developer.hashicorp.com/vault/api-docs'
  - name: AWS Secrets Manager
    docs_url: 'https://docs.aws.amazon.com/secretsmanager'
last_verified_date: '2026-02-04'
popularity_score: 79
faq:
  - q: Is 1Password API free?
    a: >-
      No free tier for API access. Requires Business or Enterprise plan.
      1Password CLI tool available for all users.
  - q: What is 1Password Connect?
    a: >-
      Self-hosted REST API for accessing 1Password vaults. Ideal for secrets
      management in infrastructure and CI/CD.
  - q: Can I use it for secrets in CI/CD?
    a: >-
      Yes, 1Password Connect and CLI integrate with GitHub Actions, GitLab CI,
      Jenkins, and other CI/CD tools.
  - q: What about SDKs?
    a: >-
      Official SDKs for Go, JavaScript, Python. Plus integrations for
      Kubernetes, Terraform, and more.
auth_setup_steps:
  - Get 1Password Business or Enterprise account
  - Set up 1Password Connect server (self-hosted)
  - Generate Connect token
  - Or use 1Password CLI with service accounts
  - Use bearer token in Authorization header
---

1Password API enables secure programmatic access to password vaults and secrets. Perfect for developers needing to manage credentials in applications, automate secrets rotation, and integrate password management into CI/CD pipelines.

### What you can build

- Secrets management systems
- CI/CD credential automation
- Infrastructure secrets injection
- Password rotation tools
- Development environment setup
- Team credential management
- Kubernetes secrets operators
- Application configuration management
