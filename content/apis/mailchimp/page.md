---
title: Mailchimp API
product_name: Mailchimp
logo: /api-explorer/logos/mailchimp.png
category: communication
category_title: Communication & Social
category_description: >-
  Integrate messaging, chat, and communication features into your applications
  with APIs for WhatsApp, Instagram, SMS, and more.
category_gradient: from-red-500/15 to-red-500/5
category_badge_dark: bg-red-950/50 text-red-400 border-red-800/30
category_badge_light: bg-red-100 text-red-700 border-red-300
primary_keyword: Mailchimp API
secondary_keywords:
  - Email Marketing API
  - Newsletter API
  - Marketing Automation API
  - Campaign API
description: >-
  Manage email campaigns, audiences, automation workflows, and marketing
  analytics with Mailchimp's comprehensive marketing platform API.
pricing_free_tier: true
pricing_starting_from: Free (500 contacts)
pricing_notes: >-
  Free tier 500 contacts, 1K emails/mo. Essentials from $13/mo, Standard $20/mo,
  Premium $350/mo. API included in all plans.
auth_type: api_key
rate_limits: >-
  10 requests per second per API key. Burst limit of 20 simultaneous
  connections.
docs_url: 'https://mailchimp.com/developer'
pricing_url: 'https://mailchimp.com/pricing'
alternatives:
  - name: SendGrid
    docs_url: 'https://docs.sendgrid.com'
  - name: Constant Contact
    docs_url: 'https://developer.constantcontact.com'
  - name: Brevo (Sendinblue)
    docs_url: 'https://developers.brevo.com'
last_verified_date: '2026-02-04'
popularity_score: 86
faq:
  - q: Is Mailchimp API free?
    a: >-
      Yes, free tier includes API access with 500 contacts and 1,000 emails per
      month.
  - q: Can I send transactional emails?
    a: >-
      Yes, via Mandrill (Mailchimp Transactional Email) - separate service and
      pricing.
  - q: What about automation?
    a: >-
      Yes, API supports creating and managing automation workflows, triggers,
      and customer journeys.
  - q: Can I manage audience/subscribers?
    a: >-
      Yes, full CRUD operations on audiences (lists), members (subscribers),
      segments, and tags.
auth_setup_steps:
  - Create Mailchimp account
  - Go to Account > Extras > API keys
  - Create new API key
  - 'Note your data center (e.g., us1, us19)'
  - Use API key in Authorization Basic header
  - 'Base URL includes data center: https://<dc>.api.mailchimp.com/3.0'
---

Mailchimp API provides comprehensive access to the world's leading email marketing platform. Manage audiences, create campaigns, automate workflows, track analytics, and integrate email marketing into your applications used by millions of businesses.

### What you can build

- Email marketing automation
- Subscriber management systems
- Campaign analytics dashboards
- Lead capture and nurture tools
- E-commerce email integrations
- Customer segmentation tools
- Newsletter signup forms
- Marketing automation platforms
