---
title: HubSpot API
product_name: HubSpot
logo: /api-hub/logos/hubspot.png
category: business
category_title: Business & CRM
category_description: >-
  Enterprise APIs for CRM, project management, e-commerce, and business
  automation platforms.
category_gradient: from-indigo-500/15 to-indigo-500/5
category_badge_dark: bg-indigo-950/50 text-indigo-400 border-indigo-800/30
category_badge_light: bg-indigo-100 text-indigo-700 border-indigo-300
primary_keyword: HubSpot API
secondary_keywords:
  - CRM API
  - Marketing API
  - Sales API
  - Customer Platform API
description: >-
  Integrate with HubSpot's CRM, marketing, sales, and service platform to manage
  contacts, deals, emails, and automate customer workflows.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  API access free with HubSpot account (free and paid tiers). Rate limits based
  on subscription level.
auth_type: oauth2
rate_limits: 100 requests per 10 seconds (free tier); higher limits on paid plans.
docs_url: 'https://developers.hubspot.com/docs/api/overview'
pricing_url: 'https://www.hubspot.com/pricing'
alternatives:
  - name: Salesforce
    docs_url: 'https://developer.salesforce.com/docs'
  - name: Pipedrive
    docs_url: 'https://developers.pipedrive.com/docs/api/v1'
  - name: Zoho CRM
    docs_url: 'https://www.zoho.com/crm/developer/docs/api/v2'
last_verified_date: '2026-02-03'
popularity_score: 87
faq:
  - q: Is HubSpot API free?
    a: >-
      Yes, with a free HubSpot account. Rate limits increase with paid
      subscriptions (Starter, Professional, Enterprise).
  - q: What can I access via the API?
    a: >-
      Contacts, companies, deals, tickets, emails, marketing campaigns, forms,
      workflows, analytics, and more.
  - q: Do I need OAuth for all requests?
    a: >-
      Private apps can use API keys, but OAuth 2.0 is required for public apps
      that access multiple HubSpot accounts.
  - q: Can I automate marketing campaigns?
    a: >-
      Yes, the API supports creating and managing email campaigns, workflows,
      lists, and marketing automation.
auth_setup_steps:
  - Create HubSpot account at hubspot.com
  - Go to Settings > Integrations > Private Apps
  - Create new private app with required scopes
  - Copy access token
  - Use token in Authorization header as Bearer token
---

HubSpot API enables integration with the leading CRM and customer platform. Manage contacts, automate marketing workflows, track deals, handle customer service tickets, and build custom applications on top of HubSpot's comprehensive platform.

### What you can build

- Custom CRM integrations
- Marketing automation workflows
- Sales pipeline dashboards
- Lead generation and scoring tools
- Customer support ticket systems
- Email campaign managers
- Contact synchronization tools
- Analytics and reporting platforms
