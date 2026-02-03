---
title: Google Trends API
product_name: Google Trends
logo: /api-hub/logos/google-trends.png
category: data
category_title: Data & Analytics
category_description: >-
  Access rich data sources including maps, music catalogs, analytics, and more
  to power your data-driven applications.
category_gradient: from-blue-500/15 to-blue-500/5
category_badge_dark: bg-blue-950/50 text-blue-400 border-blue-800/30
category_badge_light: bg-blue-100 text-blue-700 border-blue-300
primary_keyword: Google Trends API
secondary_keywords:
  - Trend Analysis API
  - Search Trends API
  - Keyword Research API
  - Popular Topics API
description: >-
  Access search trend data from Google Trends to analyze keyword popularity,
  compare search terms, and track trending topics over time.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  No official public API. Free unofficial libraries (pytrends) available. Rate
  limits apply to prevent scraping.
auth_type: none
rate_limits: >-
  Unofficial - respect reasonable usage to avoid rate limiting. No official rate
  limits documented.
docs_url: 'https://trends.google.com'
pricing_url: 'https://trends.google.com'
alternatives:
  - name: Ahrefs
    docs_url: 'https://ahrefs.com/api/documentation'
  - name: SEMrush
    docs_url: 'https://www.semrush.com/api-documentation'
  - name: Twitter Trends
    docs_url: 'https://developer.twitter.com/en/docs'
last_verified_date: '2026-02-03'
popularity_score: 82
faq:
  - q: Is there an official Google Trends API?
    a: >-
      No official public API. Use unofficial libraries like pytrends (Python) or
      google-trends-api (Node.js) which scrape Trends data.
  - q: What data can I access?
    a: >-
      Search interest over time, related topics, related queries, regional
      interest, trending searches, and comparison data.
  - q: Is it legal to use unofficial APIs?
    a: >-
      Technically scraping. Google hasn't officially prohibited it, but use
      responsibly and respect rate limits.
  - q: What's the data freshness?
    a: >-
      Data typically updated daily. Real-time trending searches available for
      some regions.
auth_setup_steps:
  - No authentication required
  - 'For Python, install pytrends library'
  - 'For Node.js, install google-trends-api'
  - No API keys needed
  - Use libraries with reasonable rate limiting
---

Google Trends provides insights into search popularity and trending topics across Google Search. While no official API exists, unofficial libraries enable programmatic access to trend data for keyword research, market analysis, and content planning.

### What you can build

- Keyword research tools
- Content trend analyzers
- Market research platforms
- SEO strategy tools
- News trending trackers
- Social media analytics
- Product demand forecasters
- Competitive analysis dashboards
