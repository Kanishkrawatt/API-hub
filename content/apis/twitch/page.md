---
title: Twitch API
product_name: Twitch
logo: /api-explorer/logos/twitch.png
category: media
category_title: Media & Entertainment
category_description: >-
  APIs for video platforms, music streaming, image services, and content
  management systems.
category_gradient: from-pink-500/15 to-pink-500/5
category_badge_dark: bg-pink-950/50 text-pink-400 border-pink-800/30
category_badge_light: bg-pink-100 text-pink-700 border-pink-300
primary_keyword: Twitch API
secondary_keywords:
  - Live Streaming API
  - Gaming API
  - Stream API
  - Chat API
description: >-
  Access Twitch's live streaming platform data. Get stream info, channel
  analytics, chat integration, clips, videos, and build tools for the world's
  largest gaming community.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  API access completely free. No subscription required. Rate limits apply (800
  points/min for most endpoints).
auth_type: oauth2
rate_limits: >-
  800 points per minute per client. Most endpoints cost 1 point. Higher limits
  available for approved extensions.
docs_url: 'https://dev.twitch.tv/docs/api'
pricing_url: 'https://www.twitch.tv'
alternatives:
  - name: YouTube Live
    docs_url: 'https://developers.google.com/youtube/v3/live'
  - name: Facebook Gaming
    docs_url: 'https://developers.facebook.com/docs/gaming-services'
  - name: Discord
    docs_url: 'https://discord.com/developers/docs'
last_verified_date: '2026-02-04'
popularity_score: 91
faq:
  - q: Is Twitch API free?
    a: >-
      Yes, completely free with rate limits. No paid tiers. Approved extensions
      can request higher limits.
  - q: Can I integrate with chat?
    a: >-
      Yes, IRC-based chat API and PubSub for real-time events. Build chat bots,
      moderation tools, and interactive features.
  - q: What about stream analytics?
    a: >-
      Yes, get viewer counts, follower stats, subscription data, clips, and
      VODs. Build custom analytics dashboards.
  - q: Can I create Twitch Extensions?
    a: >-
      Yes, build Extensions (overlays, panels, video components) that integrate
      directly into Twitch channels.
auth_setup_steps:
  - Create Twitch account
  - Go to dev.twitch.tv/console
  - Register your application
  - Get Client ID and Client Secret
  - Implement OAuth 2.0 authorization flow
  - Request appropriate scopes
  - Use access token in Authorization header as Bearer
---

Twitch API provides comprehensive access to the world's leading live streaming platform for gaming and creative content. Build chat bots, stream analytics, channel management tools, and interactive experiences for millions of creators and viewers.

### What you can build

- Stream analytics dashboards
- Chat bots and moderation
- Clip compilation tools
- Multi-stream viewers
- Twitch Extensions
- Channel management apps
- Viewer engagement tools
- Stream alerts and overlays
