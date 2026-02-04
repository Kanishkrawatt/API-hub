---
title: Zoom API
product_name: Zoom
logo: /api-explorer/logos/zoom.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate email, messaging, video calling, and communication platforms into
  your applications.
category_gradient: from-purple-500/15 to-purple-500/5
category_badge_dark: bg-purple-950/50 text-purple-400 border-purple-800/30
category_badge_light: bg-purple-100 text-purple-700 border-purple-300
primary_keyword: Zoom API
secondary_keywords:
  - Video Conferencing API
  - Meeting API
  - Webinar API
  - Video API
description: >-
  Integrate Zoom's video conferencing, webinars, chat, and phone capabilities.
  Create meetings, manage users, access recordings, and build custom Zoom
  experiences.
pricing_free_tier: true
pricing_starting_from: Free (Zoom account required)
pricing_notes: >-
  API access included with Zoom account. Free plan available. Pro from
  $15.99/user/mo, Business from $21.99/user/mo.
auth_type: oauth2
rate_limits: >-
  Varies by endpoint. Meetings - 100 req/day on free, unlimited on paid. Users
  API - rate limited per account type.
docs_url: 'https://developers.zoom.us/docs/api'
pricing_url: 'https://zoom.us/pricing'
alternatives:
  - name: Microsoft Teams
    docs_url: 'https://learn.microsoft.com/graph/api/resources/teams-api-overview'
  - name: Google Meet
    docs_url: 'https://developers.google.com/meet'
  - name: Webex
    docs_url: 'https://developer.webex.com'
last_verified_date: '2026-02-04'
popularity_score: 90
faq:
  - q: Is Zoom API free?
    a: >-
      Yes, API access included with free Zoom account. Some APIs require paid
      plan for full functionality.
  - q: Can I create meetings programmatically?
    a: >-
      Yes, create instant or scheduled meetings, get join URLs, manage
      participants, and control meeting settings.
  - q: What about webhooks?
    a: >-
      Yes, webhooks for meeting events, participant joins/leaves, recordings,
      and more. Real-time event notifications.
  - q: Can I access recordings?
    a: >-
      Yes, download cloud recordings, get transcripts, and manage recording
      storage via API.
auth_setup_steps:
  - Create Zoom account
  - Go to Zoom App Marketplace
  - Create Server-to-Server OAuth app
  - 'Get Account ID, Client ID, and Client Secret'
  - Generate access token
  - Use token in Authorization header as Bearer
---

Zoom API enables deep integration with the world's leading video communications platform. Build custom meeting experiences, automate scheduling, manage recordings, integrate chat and phone, and create powerful video collaboration tools.

### What you can build

- Meeting scheduling platforms
- Virtual event management
- Automated webinar systems
- Video call integrations
- Recording management tools
- Attendance tracking systems
- Custom Zoom clients
- Virtual classroom platforms
