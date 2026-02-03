---
title: Reddit API
product_name: Reddit
logo: /api-hub/logos/reddit.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate messaging, chat, and communication features into your applications
  with APIs for WhatsApp, Instagram, SMS, and more.
category_gradient: from-orange-500/15 to-orange-500/5
category_badge_dark: bg-orange-950/50 text-orange-400 border-orange-800/30
category_badge_light: bg-orange-100 text-orange-700 border-orange-300
primary_keyword: Reddit API
secondary_keywords:
  - Social Media API
  - Community API
  - Forum API
  - Discussion Board API
description: >-
  Access Reddit's vast community data including posts, comments, subreddits, and
  user information. Build Reddit clients, bots, and analytics tools.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Free with rate limits (60 requests per minute). Enterprise tier available for
  higher limits and commercial use.
auth_type: oauth2
rate_limits: >-
  60 requests per minute per OAuth client; 10 requests per minute for
  unauthenticated.
docs_url: 'https://www.reddit.com/dev/api'
pricing_url: 'https://www.redditinc.com/policies/data-api-terms'
alternatives:
  - name: Lemmy
    docs_url: 'https://join-lemmy.org/docs/en/index.html'
  - name: Discourse
    docs_url: 'https://docs.discourse.org'
  - name: Hacker News
    docs_url: 'https://github.com/HackerNews/API'
last_verified_date: '2026-02-03'
popularity_score: 86
faq:
  - q: Is Reddit API free?
    a: >-
      Yes, free with 60 requests per minute limit. Enterprise tier required for
      commercial use and higher limits.
  - q: What changed with Reddit API in 2023?
    a: >-
      Pricing introduced for high-volume commercial apps. Free tier remains for
      moderate use and non-commercial bots.
  - q: Can I build a Reddit client?
    a: >-
      Yes, but subject to rate limits and terms. Many third-party clients were
      affected by 2023 pricing changes.
  - q: What about Reddit bots?
    a: >-
      Bots allowed under free tier with proper rate limiting and following bot
      guidelines. Must identify as bot in user agent.
auth_setup_steps:
  - Create Reddit account
  - Go to reddit.com/prefs/apps
  - Click Create Application
  - 'Choose app type (script, web app, or installed app)'
  - Get Client ID and Client Secret
  - Implement OAuth 2.0 flow
  - Include proper User-Agent header in all requests
---

Reddit API provides access to the "front page of the internet" with millions of communities (subreddits) and billions of posts. Build Reddit clients, bots, analytics tools, and community management applications.

### What you can build

- Reddit client applications
- Community moderation bots
- Content aggregation tools
- Sentiment analysis dashboards
- Subreddit analytics platforms
- Automated posting tools
- Trending topic trackers
- Market research tools
