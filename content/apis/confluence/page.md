---
title: Confluence API
product_name: Confluence
logo: /api-explorer/logos/confluence.png
category: business
category_title: Business & CRM
category_description: >-
  Enterprise APIs for CRM, project management, e-commerce, and business
  automation platforms.
category_gradient: from-indigo-500/15 to-indigo-500/5
category_badge_dark: bg-indigo-950/50 text-indigo-400 border-indigo-800/30
category_badge_light: bg-indigo-100 text-indigo-700 border-indigo-300
primary_keyword: Confluence API
secondary_keywords:
  - Wiki API
  - Documentation API
  - Collaboration API
  - Knowledge Base API
description: >-
  Access and manage Confluence spaces, pages, and content programmatically.
  Build integrations with Atlassian's team collaboration and documentation
  platform.
pricing_free_tier: true
pricing_starting_from: Free (10 users)
pricing_notes: >-
  Free tier 10 users, 2GB storage. Standard $6.05/user/mo, Premium
  $11.55/user/mo, Enterprise custom. API included in all plans.
auth_type: oauth2
rate_limits: >-
  Cloud - no strict rate limits but fair use policy. Server/Data Center -
  configurable per instance.
docs_url: 'https://developer.atlassian.com/cloud/confluence/rest/v2'
pricing_url: 'https://www.atlassian.com/software/confluence/pricing'
alternatives:
  - name: Notion
    docs_url: 'https://developers.notion.com'
  - name: GitBook
    docs_url: 'https://developer.gitbook.com'
  - name: Docusaurus
    docs_url: 'https://docusaurus.io'
last_verified_date: '2026-02-04'
popularity_score: 82
faq:
  - q: Is Confluence API free?
    a: >-
      Yes, API access included with all Confluence plans including free tier (10
      users max).
  - q: REST or GraphQL?
    a: >-
      REST API is primary. Confluence Cloud REST API v2 is current standard. No
      official GraphQL yet.
  - q: Can I create and edit pages?
    a: >-
      Yes, full CRUD operations on spaces, pages, attachments, comments, and
      labels via API.
  - q: What about macros and formatting?
    a: >-
      API supports Confluence Storage Format (XHTML-based) and can read/write
      macros and rich formatting.
auth_setup_steps:
  - Create Atlassian account
  - 'Go to https://id.atlassian.com/manage-profile/security/api-tokens'
  - Create API token for Cloud
  - Or set up OAuth 2.0 app for advanced integrations
  - Use Basic Auth with email and API token
  - Or OAuth 2.0 with proper scopes
---

Confluence API provides programmatic access to Atlassian's team collaboration and documentation platform. Automate content creation, manage spaces and pages, integrate with other tools, and build custom workflows for your team wiki and knowledge base.

### What you can build

- Documentation automation tools
- Content migration systems
- Custom documentation portals
- Knowledge base search engines
- Automated report generators
- Team collaboration dashboards
- Confluence backup tools
- Integration with CI/CD pipelines
