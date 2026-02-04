---
title: Discord API
product_name: Discord
logo: /api-explorer/logos/discord.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate messaging, chat, and communication features into your applications
  with APIs for WhatsApp, Instagram, SMS, and more.
category_gradient: from-indigo-500/15 to-indigo-500/5
category_badge_dark: bg-indigo-950/50 text-indigo-400 border-indigo-800/30
category_badge_light: bg-indigo-100 text-indigo-700 border-indigo-300
primary_keyword: Discord API
secondary_keywords:
  - Discord Bot API
  - Discord Webhook API
  - Gaming Chat API
  - Community API
description: >-
  Build Discord bots and integrations to manage servers, send messages, handle
  events, and create interactive experiences for communities.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Completely free to use. No API usage fees. Bot hosting costs are your own
  responsibility.
auth_type: bearer
rate_limits: Global rate limit of 50 requests per second; per-route limits vary.
docs_url: 'https://discord.com/developers/docs'
pricing_url: 'https://discord.com/developers/docs'
alternatives:
  - name: Slack
    docs_url: 'https://api.slack.com'
  - name: Telegram Bot API
    docs_url: 'https://core.telegram.org/bots/api'
  - name: Microsoft Teams
    docs_url: 'https://learn.microsoft.com/en-us/microsoftteams/platform'
last_verified_date: '2026-02-03'
popularity_score: 90
faq:
  - q: Is the Discord API free?
    a: >-
      Yes, completely free with no usage fees. You only need to host your bot
      application yourself.
  - q: What can Discord bots do?
    a: >-
      Send messages, manage roles and channels, moderate content, play audio,
      handle slash commands, create interactive buttons, and more.
  - q: Do I need a verified bot?
    a: >-
      Only if your bot is in 100+ servers. Verified bots get higher rate limits
      and can access privileged intents.
  - q: What are intents?
    a: >-
      Intents control which events your bot receives. Some intents (like message
      content) require approval for large bots.
auth_setup_steps:
  - Go to discord.com/developers/applications
  - Create new application
  - Navigate to Bot section and add bot
  - Copy bot token
  - Enable required privileged intents if needed
  - Use token in Authorization header as Bot token
---

Discord API enables developers to create powerful bots and integrations for Discord servers. With over 150 million monthly active users, Discord is the leading platform for gaming communities, interest groups, and team collaboration.

### What you can build

- Moderation and administration bots
- Music and audio streaming bots
- Gaming utility and stats trackers
- Community engagement tools
- Custom slash commands and interactions
- Server analytics dashboards
- Role management systems
- Integration bridges with other platforms
