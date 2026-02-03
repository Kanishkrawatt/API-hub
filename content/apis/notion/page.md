---
title: Notion API
product_name: Notion
logo: /api-hub/logos/notion.png
category: data
category_title: Data & Analytics
category_description: >-
  Access rich data sources including maps, music catalogs, analytics, and more
  to power your data-driven applications.
category_gradient: from-gray-500/15 to-gray-500/5
category_badge_dark: bg-gray-950/50 text-gray-400 border-gray-800/30
category_badge_light: bg-gray-100 text-gray-700 border-gray-300
primary_keyword: Notion API
secondary_keywords:
  - Notion Integration API
  - Workspace API
  - Database API
  - Pages API
description: >-
  Integrate with Notion's workspace to read, create, and update pages,
  databases, and content programmatically.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  API is free to use. Workspace access requires Notion subscription (Free, Plus,
  Business, or Enterprise).
auth_type: oauth2
rate_limits: 3 requests per second per integration.
docs_url: 'https://developers.notion.com'
pricing_url: 'https://www.notion.so/pricing'
alternatives:
  - name: Airtable
    docs_url: 'https://airtable.com/developers/web/api'
  - name: Coda
    docs_url: 'https://coda.io/developers/apis/v1'
  - name: Google Workspace
    docs_url: 'https://developers.google.com/workspace'
last_verified_date: '2026-02-03'
popularity_score: 87
faq:
  - q: What can I do with the Notion API?
    a: >-
      Read and update pages, query and modify databases, create new content,
      sync data with external tools, and build custom integrations.
  - q: Is the API free?
    a: >-
      Yes, the API is free to use. You need a Notion workspace (free or paid) to
      connect to.
  - q: Can I access any Notion workspace?
    a: >-
      Only workspaces that grant your integration permission. Users must
      explicitly connect your integration.
  - q: Are there content limits?
    a: >-
      Yes, pages have a 100KB limit per request, and there are rate limits of 3
      requests per second.
auth_setup_steps:
  - Go to notion.so/my-integrations
  - Create a new integration
  - Note your Internal Integration Token
  - Share target pages/databases with your integration
  - Use token in Authorization header as Bearer token
---

Notion API enables developers to build powerful integrations with Notion's all-in-one workspace. Access pages, databases, and blocks to create automated workflows, sync data with external systems, or build custom applications on top of Notion's flexible platform.

### What you can build

- Content management systems
- Project management dashboards
- CRM and database syncing tools
- Automated content publishing
- Knowledge base integrations
- Task and workflow automation
- Documentation generators
- Team collaboration tools
