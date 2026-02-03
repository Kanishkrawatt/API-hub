---
title: Salesforce API
product_name: Salesforce
logo: /api-hub/logos/salesforce.png
category: business
category_title: Business & CRM
category_description: >-
  Enterprise APIs for CRM, project management, e-commerce, and business
  automation platforms.
category_gradient: from-indigo-500/15 to-indigo-500/5
category_badge_dark: bg-indigo-950/50 text-indigo-400 border-indigo-800/30
category_badge_light: bg-indigo-100 text-indigo-700 border-indigo-300
primary_keyword: Salesforce API
secondary_keywords:
  - CRM API
  - Sales Cloud API
  - Customer Data API
  - Enterprise API
description: >-
  Access Salesforce CRM data including accounts, contacts, leads, opportunities,
  and custom objects through REST, SOAP, and Bulk APIs.
pricing_free_tier: false
pricing_starting_from: $25/user/month (Starter Suite)
pricing_notes: >-
  Requires Salesforce subscription. Starter $25/user/mo, Professional
  $75/user/mo, Enterprise $150/user/mo, Unlimited $300/user/mo.
auth_type: oauth2
rate_limits: >-
  15,000 API calls per 24 hours (Professional), 100,000 (Enterprise), unlimited
  (Unlimited tier).
docs_url: 'https://developer.salesforce.com/docs'
pricing_url: 'https://www.salesforce.com/pricing'
alternatives:
  - name: HubSpot
    docs_url: 'https://developers.hubspot.com'
  - name: Microsoft Dynamics
    docs_url: 'https://learn.microsoft.com/dynamics365'
  - name: Zoho CRM
    docs_url: 'https://www.zoho.com/crm/developer'
last_verified_date: '2026-02-03'
popularity_score: 92
faq:
  - q: Is Salesforce API free?
    a: >-
      No, requires active Salesforce subscription starting at $25/user/month.
      API access included with subscription.
  - q: What are the API rate limits?
    a: >-
      Varies by edition. Professional 15K calls/24hrs, Enterprise 100K,
      Unlimited has no limits. Can purchase additional API calls.
  - q: REST or SOAP API?
    a: >-
      Both available. REST API recommended for most use cases. SOAP for legacy
      integrations. Bulk API for large data operations.
  - q: Can I access custom objects?
    a: >-
      Yes, full access to standard and custom objects, fields, and metadata
      through API.
auth_setup_steps:
  - Create Salesforce Developer account or use existing org
  - Create Connected App in Setup
  - Configure OAuth settings and callback URL
  - Get Consumer Key and Secret
  - Implement OAuth 2.0 authorization flow
  - 'Request appropriate scopes (api, refresh_token, etc.)'
  - Exchange authorization code for access token
---

Salesforce API provides comprehensive access to the world's #1 CRM platform. Manage customer data, automate sales processes, sync data with external systems, and build custom integrations with Salesforce's extensive API ecosystem.

### What you can build

- CRM integration platforms
- Sales automation tools
- Customer data sync applications
- Custom dashboards and analytics
- Marketing automation systems
- Support ticketing integrations
- Mobile CRM applications
- Data migration tools
