---
title: Airtable API
product_name: Airtable
logo: /api-explorer/logos/airtable.png
category: productivity
category_title: Cloud & Productivity
category_description: >-
  APIs for cloud storage, spreadsheets, calendars, and productivity tools from
  Google Workspace and beyond.
category_gradient: from-blue-500/15 to-blue-500/5
category_badge_dark: bg-blue-950/50 text-blue-400 border-blue-800/30
category_badge_light: bg-blue-100 text-blue-700 border-blue-300
primary_keyword: Airtable API
secondary_keywords:
  - Database API
  - Spreadsheet API
  - No-Code Database API
  - Collaborative Database API
description: >-
  Access and manipulate Airtable bases, tables, and records programmatically.
  Build integrations with the flexible database-spreadsheet hybrid platform.
pricing_free_tier: true
pricing_starting_from: 'Free (1,200 records/base)'
pricing_notes: >-
  Free tier 1,200 records per base. Plus $10/user/mo (5K records), Pro
  $20/user/mo (50K records), Enterprise custom pricing.
auth_type: api_key
rate_limits: 5 requests per second per base; higher limits available on Enterprise plan.
docs_url: 'https://airtable.com/developers/web/api/introduction'
pricing_url: 'https://airtable.com/pricing'
alternatives:
  - name: Google Sheets
    docs_url: 'https://developers.google.com/sheets/api'
  - name: Notion
    docs_url: 'https://developers.notion.com'
  - name: SmartSheet
    docs_url: 'https://smartsheet.redoc.ly'
last_verified_date: '2026-02-04'
popularity_score: 84
faq:
  - q: Is Airtable API free?
    a: >-
      Yes, free tier includes API access with 5 requests per second limit. All
      paid plans have same API access with higher rate limits on Enterprise.
  - q: Can I create bases via API?
    a: >-
      No, API allows CRUD operations on records within existing bases/tables.
      Base and table structure must be created via UI.
  - q: What's the record limit?
    a: >-
      Free - 1,200 records per base, Plus - 5,000, Pro - 50,000, Enterprise -
      500,000 per base.
  - q: Does it support webhooks?
    a: >-
      Yes, webhooks available on Pro and Enterprise plans to get real-time
      notifications of record changes.
auth_setup_steps:
  - Sign up at airtable.com
  - Go to account settings
  - Navigate to API section
  - Create a personal access token
  - 'Set appropriate scopes (data.records:read, data.records:write, etc.)'
  - Copy token and use in Authorization Bearer header
---

Airtable API provides programmatic access to Airtable's flexible database platform that combines the simplicity of spreadsheets with the power of databases. Create, read, update, and delete records, attach files, and build powerful integrations.

### What you can build

- Custom data entry forms
- Automated data sync tools
- Dashboard and reporting apps
- Workflow automation systems
- Mobile apps with Airtable backend
- CRM integrations
- Content management systems
- Inventory management tools
