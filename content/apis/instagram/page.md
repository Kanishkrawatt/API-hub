---
title: Instagram API
product_name: Instagram
logo: /api-explorer/logos/instagram.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate messaging, chat, and communication features into your applications
  with APIs for WhatsApp, Instagram, SMS, and more.
category_gradient: from-pink-500/15 to-pink-500/5
category_badge_dark: bg-pink-950/50 text-pink-400 border-pink-800/30
category_badge_light: bg-pink-100 text-pink-700 border-pink-300
primary_keyword: Instagram API
secondary_keywords:
  - Instagram Graph API
  - Instagram Basic Display API
  - Meta Instagram API
  - Instagram Business API
description: >-
  Access Instagram's platform for publishing content, managing profiles,
  retrieving insights, and engaging with your audience programmatically.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Free to use with rate limits. Requires Facebook Business account and app
  review for certain features.
auth_type: oauth2
rate_limits: 200 calls per hour per user; varies by endpoint type.
docs_url: 'https://developers.facebook.com/docs/instagram-api'
pricing_url: 'https://developers.facebook.com/docs/instagram-api'
alternatives:
  - name: TikTok API
    docs_url: 'https://developers.tiktok.com'
  - name: Twitter API
    docs_url: 'https://developer.twitter.com/en/docs'
  - name: Pinterest API
    docs_url: 'https://developers.pinterest.com/docs/api/v5'
last_verified_date: '2026-02-03'
popularity_score: 88
faq:
  - q: What is the difference between Graph API and Basic Display API?
    a: >-
      Graph API is for businesses to manage content, insights, and comments.
      Basic Display API is for personal accounts to display media on websites.
  - q: Can I post photos and videos via the API?
    a: >-
      Yes, Instagram Graph API allows publishing photos, videos, stories, and
      reels for business and creator accounts.
  - q: Do I need a business account?
    a: >-
      Yes, most API features require an Instagram Business or Creator account
      connected to a Facebook Page.
  - q: Are there content restrictions?
    a: >-
      Yes, all content must comply with Instagram Community Guidelines and API
      Platform Terms.
auth_setup_steps:
  - Create Meta for Developers account at developers.facebook.com
  - Create a Meta App with Instagram product
  - Connect Instagram Business account to Facebook Page
  - Submit app for review if needed
  - Get User Access Token via OAuth flow
  - Exchange for Long-Lived Token
  - Use token in Authorization header or as query parameter
---

Instagram API enables businesses and creators to manage their Instagram presence programmatically. Part of Meta's suite of APIs, it provides access to publishing, analytics, messaging, and audience engagement features for business and creator accounts.

### What you can build

- Social media management dashboards
- Content scheduling and publishing tools
- Instagram analytics and reporting platforms
- Influencer marketing platforms
- User-generated content aggregators
- Social listening and monitoring tools
- Automated comment moderation systems
- Multi-platform social media managers
