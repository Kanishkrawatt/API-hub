---
title: Slack API
product_name: Slack
logo: /api-explorer/logos/slack.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate messaging, chat, and communication features into your applications
  with APIs for WhatsApp, Instagram, SMS, and more.
category_gradient: from-purple-500/15 to-purple-500/5
category_badge_dark: bg-purple-950/50 text-purple-400 border-purple-800/30
category_badge_light: bg-purple-100 text-purple-700 border-purple-300
primary_keyword: Slack API
secondary_keywords:
  - Slack Bot API
  - Slack Web API
  - Workplace Chat API
  - Team Collaboration API
description: >-
  Build apps and bots for Slack workspaces with APIs for messaging,
  notifications, workflows, and team collaboration features.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  API access is free. Slack workspace pricing (Free, Pro, Business+, Enterprise)
  is separate from API usage.
auth_type: oauth2
rate_limits: >-
  Tier-based (1-100+ requests per minute) depending on method and workspace
  size.
docs_url: 'https://api.slack.com'
pricing_url: 'https://api.slack.com/docs/rate-limits'
alternatives:
  - name: Discord
    docs_url: 'https://discord.com/developers/docs'
  - name: Microsoft Teams
    docs_url: 'https://learn.microsoft.com/en-us/microsoftteams/platform'
  - name: Mattermost
    docs_url: 'https://api.mattermost.com'
last_verified_date: '2026-02-03'
popularity_score: 89
faq:
  - q: Is the Slack API free to use?
    a: >-
      Yes, the API is free. You need a Slack workspace (free or paid) to build
      apps for, but API usage itself has no fees.
  - q: What can Slack apps do?
    a: >-
      Send messages, create interactive UI, handle slash commands, respond to
      events, manage channels, and integrate with external services.
  - q: Do I need approval to publish an app?
    a: >-
      Only if distributing to other workspaces. Private workspace apps don't
      require Slack approval.
  - q: What are scopes?
    a: >-
      Scopes define permissions your app requests. Users must approve these
      permissions during installation.
auth_setup_steps:
  - Go to api.slack.com/apps
  - Create new app (from scratch or manifest)
  - Configure OAuth scopes under OAuth & Permissions
  - Install app to workspace
  - Copy Bot User OAuth Token
  - Use token in Authorization header as Bearer token
---

Slack API enables developers to build powerful integrations, bots, and apps for workplace communication. With over 10 million daily active users across hundreds of thousands of workspaces, Slack is the leading platform for team collaboration.

### What you can build

- Custom workflow automations
- Interactive chatbots and assistants
- Notification and alert systems
- Project management integrations
- Custom slash commands
- File sharing and collaboration tools
- Analytics and reporting dashboards
- External service integrations
