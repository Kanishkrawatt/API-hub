---
title: Microsoft Teams API
product_name: Microsoft Teams
logo: /api-explorer/logos/microsoft-teams.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate email, messaging, video calling, and communication platforms into
  your applications.
category_gradient: from-purple-500/15 to-purple-500/5
category_badge_dark: bg-purple-950/50 text-purple-400 border-purple-800/30
category_badge_light: bg-purple-100 text-purple-700 border-purple-300
primary_keyword: Microsoft Teams API
secondary_keywords:
  - Teams Graph API
  - Collaboration API
  - Chat API
  - Meetings API
description: >-
  Integrate Microsoft Teams collaboration features via Microsoft Graph API.
  Manage teams, channels, chats, meetings, and build Teams apps with tabs, bots,
  and message extensions.
pricing_free_tier: true
pricing_starting_from: Free (Microsoft 365 required)
pricing_notes: >-
  API access free with Microsoft 365 account. Business Basic $6/user/mo,
  Business Standard $12.50/user/mo, Enterprise plans available.
auth_type: oauth2
rate_limits: >-
  Varies by endpoint. Typically 2,000-10,000 requests per app per tenant per 10
  minutes. Enterprise apps can request higher limits.
docs_url: 'https://learn.microsoft.com/graph/teams-concept-overview'
pricing_url: >-
  https://www.microsoft.com/microsoft-365/microsoft-teams/compare-microsoft-teams-options
alternatives:
  - name: Slack
    docs_url: 'https://api.slack.com'
  - name: Zoom
    docs_url: 'https://developers.zoom.us/docs/api'
  - name: Discord
    docs_url: 'https://discord.com/developers/docs'
last_verified_date: '2026-02-04'
popularity_score: 89
faq:
  - q: Is Teams API free?
    a: >-
      Yes, API access included with Microsoft 365 subscription. Free tier
      available for development and testing.
  - q: What can I build?
    a: >-
      Teams bots, tabs, message extensions, meeting apps, notifications, and
      integrations with external services.
  - q: How do I authenticate?
    a: >-
      Use Microsoft Identity Platform (Azure AD) with OAuth 2.0. Supports
      delegated and application permissions.
  - q: Can I send messages to channels?
    a: >-
      Yes, post messages to channels, reply to conversations, send adaptive
      cards, and create rich notifications.
auth_setup_steps:
  - Register app in Azure AD portal
  - Configure Teams app manifest
  - Request Graph API permissions
  - Get tenant consent for permissions
  - Implement OAuth 2.0 flow
  - Use access token in Authorization header
---

Microsoft Teams API (via Microsoft Graph) enables comprehensive integration with the world's leading enterprise collaboration platform. Build custom Teams apps, automate workflows, manage meetings and channels, and integrate business systems with 280+ million Teams users.

### What you can build

- Teams chatbots
- Custom tabs and apps
- Meeting management tools
- Workflow automation
- Notification systems
- Analytics dashboards
- Document collaboration
- Virtual assistant integrations
