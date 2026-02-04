---
title: Twitter API (X API)
product_name: Twitter
logo: /api-explorer/logos/twitter.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate messaging, chat, and communication features into your applications
  with APIs for WhatsApp, Instagram, SMS, and more.
category_gradient: from-sky-500/15 to-sky-500/5
category_badge_dark: bg-sky-950/50 text-sky-400 border-sky-800/30
category_badge_light: bg-sky-100 text-sky-700 border-sky-300
primary_keyword: Twitter API
secondary_keywords:
  - X API
  - Social Media API
  - Tweet API
  - Social Networking API
description: >-
  Access Twitter/X data including tweets, user profiles, trends, and real-time
  streams. Post tweets, search content, and build social media integrations.
pricing_free_tier: true
pricing_starting_from: Free (limited)
pricing_notes: >-
  Free tier very limited (1,500 tweets/month). Basic $100/month, Pro
  $5,000/month, Enterprise custom pricing.
auth_type: oauth2
rate_limits: >-
  Varies by tier. Free - 1,500 tweets/month, Basic - 10K tweets/month, Pro - 1M
  tweets/month.
docs_url: 'https://developer.twitter.com/en/docs'
pricing_url: 'https://developer.twitter.com/en/products/twitter-api'
alternatives:
  - name: Mastodon
    docs_url: 'https://docs.joinmastodon.org/api'
  - name: Bluesky
    docs_url: 'https://docs.bsky.app'
  - name: LinkedIn
    docs_url: 'https://learn.microsoft.com/linkedin'
last_verified_date: '2026-02-03'
popularity_score: 88
faq:
  - q: Is Twitter API still free?
    a: >-
      Limited free tier exists (1,500 tweets/month post only). Most features
      require paid plans starting at $100/month.
  - q: What happened to the old API?
    a: >-
      Twitter API was restructured in 2023 with new pricing tiers. Free tier
      heavily restricted compared to previous versions.
  - q: Can I search historical tweets?
    a: >-
      Full archive search requires Enterprise tier. Basic/Pro tiers have 7-day
      search window.
  - q: What about streaming tweets?
    a: >-
      Real-time streaming available on Basic tier and above. Filtered stream and
      sampled stream endpoints.
auth_setup_steps:
  - Apply for Twitter Developer account
  - Create a project and app in Developer Portal
  - Generate API keys and tokens
  - Implement OAuth 2.0 flow for user authentication
  - Or use App-only auth for non-user context
  - Include Bearer token in Authorization header
---

Twitter API (now X API) provides programmatic access to one of the world's largest social networks. Post tweets, search content, access user data, stream real-time tweets, and build social media tools and analytics.

### What you can build

- Social media management tools
- Tweet scheduling applications
- Sentiment analysis platforms
- Brand monitoring dashboards
- Social listening tools
- Trend analysis applications
- Bot accounts and automation
- Social media analytics
