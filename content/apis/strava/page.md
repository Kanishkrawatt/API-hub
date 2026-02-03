---
title: Strava API
product_name: Strava
logo: /api-hub/logos/strava.png
category: data
category_title: Data & Analytics
category_description: >-
  Access rich data sources including maps, music catalogs, analytics, and more
  to power your data-driven applications.
category_gradient: from-orange-500/15 to-orange-500/5
category_badge_dark: bg-orange-950/50 text-orange-400 border-orange-800/30
category_badge_light: bg-orange-100 text-orange-700 border-orange-300
primary_keyword: Strava API
secondary_keywords:
  - Fitness API
  - Activity Tracking API
  - Sports Data API
  - Exercise API
description: >-
  Access Strava's fitness and activity data including runs, rides, workouts,
  routes, segments, and athlete statistics through comprehensive REST API.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Free with rate limits (100 requests per 15 minutes, 1,000 per day). No paid
  tiers; rate limits are fixed.
auth_type: oauth2
rate_limits: '100 requests per 15 minutes; 1,000 requests per day per application.'
docs_url: 'https://developers.strava.com'
pricing_url: 'https://developers.strava.com/docs/rate-limits'
alternatives:
  - name: Garmin Connect
    docs_url: 'https://developer.garmin.com'
  - name: Fitbit
    docs_url: 'https://dev.fitbit.com'
  - name: Apple HealthKit
    docs_url: 'https://developer.apple.com/healthkit'
last_verified_date: '2026-02-03'
popularity_score: 78
faq:
  - q: Is Strava API free?
    a: >-
      Yes, completely free with rate limits (100 requests per 15 minutes). No
      paid upgrade options available.
  - q: What data can I access?
    a: >-
      Athlete profiles, activities (runs/rides/etc), routes, segments, efforts,
      clubs, and streams (detailed GPS/HR data).
  - q: Can I upload activities?
    a: >-
      Yes, you can create/upload activities with GPS data, distance, time, and
      other metrics.
  - q: Are rate limits strict?
    a: >-
      Yes, 100 requests per 15 minutes is strictly enforced. Design your app to
      cache data and minimize API calls.
auth_setup_steps:
  - Create Strava account at strava.com
  - Go to Settings > My API Application
  - Create new application
  - Get Client ID and Client Secret
  - Implement OAuth 2.0 authorization flow
  - 'Request appropriate scopes (read, activity:read_all, etc.)'
  - Exchange authorization code for access token
---

Strava API provides access to the world's largest community of athletes. Integrate running, cycling, and other fitness activities into your apps with detailed GPS data, performance metrics, and social features.

### What you can build

- Fitness tracking applications
- Workout analysis dashboards
- Training plan creators
- Segment leaderboards and challenges
- Activity social sharing tools
- Performance analytics platforms
- Route planning applications
- Club and team management tools
