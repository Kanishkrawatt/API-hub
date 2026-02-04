---
title: Steam Web API
product_name: Steam
logo: /api-explorer/logos/steam.png
category: media
category_title: Media & Content
category_description: >-
  APIs for video platforms, music streaming, photography, content management,
  and social media content.
category_gradient: from-pink-500/15 to-pink-500/5
category_badge_dark: bg-pink-950/50 text-pink-400 border-pink-800/30
category_badge_light: bg-pink-100 text-pink-700 border-pink-300
primary_keyword: Steam API
secondary_keywords:
  - Steam Web API
  - Gaming API
  - PC Games API
  - Steam Community API
description: >-
  Access Steam's gaming platform data including player stats, game info,
  achievements, inventory, and community features for PC gaming.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Completely free with rate limits. Requires Steam Web API key which is free to
  obtain with Steam account.
auth_type: api_key
rate_limits: '100,000 calls per day per API key; rate limiting may apply at higher volumes.'
docs_url: 'https://steamcommunity.com/dev'
pricing_url: 'https://steamcommunity.com/dev'
alternatives:
  - name: Epic Games Store
    docs_url: 'https://dev.epicgames.com/docs'
  - name: Xbox Live
    docs_url: 'https://learn.microsoft.com/en-us/gaming/xbox-live'
  - name: PlayStation Network
    docs_url: 'https://p.siedev.net'
last_verified_date: '2026-02-03'
popularity_score: 86
faq:
  - q: Is Steam API free?
    a: >-
      Yes, completely free with generous rate limits (100,000 calls per day).
      You just need a Steam account to get an API key.
  - q: What data can I access?
    a: >-
      Player profiles, game stats, achievements, inventory, friends lists,
      workshop items, store data, and community content.
  - q: Can I access real-time player data?
    a: >-
      Yes, you can get current player counts, online status, and in-game status
      for public profiles.
  - q: Are there privacy restrictions?
    a: >-
      Yes, users can set profiles to private. You can only access data for
      public profiles or with user authorization.
auth_setup_steps:
  - Create or log in to Steam account
  - Visit steamcommunity.com/dev/apikey
  - Register for Steam Web API key
  - Enter domain name (can be localhost for testing)
  - Copy your API key
  - Include key as query parameter in API requests
---

Steam Web API provides access to Valve's Steam platform, the largest PC gaming distribution service with over 30,000 games and 120+ million active users. Access game data, player statistics, achievements, and community features to build gaming applications and tools.

### What you can build

- Gaming profile showcases and portfolios
- Achievement trackers and completionist tools
- Game recommendation engines
- Price tracking and deals aggregators
- Inventory management tools
- Trading and marketplace bots
- Community integration apps
- Player statistics and analytics platforms
