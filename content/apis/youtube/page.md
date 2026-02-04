---
title: YouTube Data API
product_name: YouTube
logo: /api-explorer/logos/youtube.png
category: media
category_title: Media & Content
category_description: >-
  APIs for video platforms, music streaming, photography, content management,
  and social media content.
category_gradient: from-pink-500/15 to-pink-500/5
category_badge_dark: bg-pink-950/50 text-pink-400 border-pink-800/30
category_badge_light: bg-pink-100 text-pink-700 border-pink-300
primary_keyword: YouTube API
secondary_keywords:
  - YouTube Data API
  - YouTube Analytics API
  - Video API
  - YouTube Player API
description: >-
  Access YouTube's vast video platform to search, upload, manage content,
  retrieve analytics, and embed video players programmatically.
pricing_free_tier: true
pricing_starting_from: '10,000 free quota units/day'
pricing_notes: >-
  Free quota of 10,000 units per day. Read operations cost 1-50 units, writes
  cost 50-1600 units. Additional quota available for purchase.
auth_type: oauth2
rate_limits: '10,000 quota units per day by default; can request increase.'
docs_url: 'https://developers.google.com/youtube/v3'
pricing_url: 'https://developers.google.com/youtube/v3/determine_quota_cost'
alternatives:
  - name: Vimeo
    docs_url: 'https://developer.vimeo.com'
  - name: TikTok
    docs_url: 'https://developers.tiktok.com'
  - name: Twitch
    docs_url: 'https://dev.twitch.tv/docs/api'
last_verified_date: '2026-02-03'
popularity_score: 93
faq:
  - q: Is the YouTube API free?
    a: >-
      Yes, with a free daily quota of 10,000 units (enough for ~100-10,000
      operations depending on type). Additional quota can be purchased if
      needed.
  - q: Can I upload videos via the API?
    a: >-
      Yes, the API supports video uploads, but requires OAuth authentication and
      costs quota units.
  - q: What counts toward quota?
    a: >-
      Each API call costs units based on operation type. Search costs 100 units,
      list videos costs 1 unit, uploads cost 1600 units.
  - q: Can I monetize my API usage?
    a: >-
      You must comply with YouTube Terms of Service and API Services Terms. Some
      use cases may require special permissions.
auth_setup_steps:
  - Go to Google Cloud Console
  - Create project and enable YouTube Data API v3
  - Create OAuth 2.0 credentials
  - Configure consent screen
  - Get Client ID and Client Secret
  - Implement OAuth flow to get access token
---

YouTube Data API provides access to the world's largest video platform with over 2 billion users. Search videos, manage channels, retrieve statistics, handle playlists, and integrate YouTube content into your applications.

### What you can build

- Video search and discovery apps
- Content management dashboards
- Analytics and insights platforms
- Video recommendation engines
- Playlist generators and managers
- Channel monitoring tools
- Comment moderation systems
- Video SEO optimization tools
