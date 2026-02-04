---
title: IMDb API
product_name: IMDb
logo: /api-explorer/logos/imdb.png
category: media
category_title: Media & Content
category_description: >-
  APIs for video platforms, music streaming, photography, content management,
  and social media content.
category_gradient: from-pink-500/15 to-pink-500/5
category_badge_dark: bg-pink-950/50 text-pink-400 border-pink-800/30
category_badge_light: bg-pink-100 text-pink-700 border-pink-300
primary_keyword: IMDb API
secondary_keywords:
  - Movie Database API
  - Film API
  - TV Show API
  - Entertainment API
description: >-
  Access movie and TV show data from IMDb including titles, ratings, cast, crew,
  and reviews. Note: No official free API; use OMDb or TMDb alternatives.
pricing_free_tier: false
pricing_starting_from: Contact for pricing
pricing_notes: >-
  No official public IMDb API. Use OMDb API (free/paid) or TMDb API (free) for
  movie data. IMDbPro requires subscription.
auth_type: api_key
rate_limits: >-
  OMDb free tier - 1,000 requests/day. TMDb free tier - 40 requests per 10
  seconds.
docs_url: 'https://developer.imdb.com'
pricing_url: 'https://www.omdbapi.com'
alternatives:
  - name: OMDb API
    docs_url: 'https://www.omdbapi.com'
  - name: TMDb API
    docs_url: 'https://www.themoviedb.org/documentation/api'
  - name: TVMaze API
    docs_url: 'https://www.tvmaze.com/api'
last_verified_date: '2026-02-04'
popularity_score: 82
faq:
  - q: Is there an official IMDb API?
    a: >-
      No official public API from IMDb. Use OMDb API (unofficial but popular) or
      TMDb API for movie/TV data.
  - q: What is OMDb API?
    a: >-
      Open Movie Database - unofficial API that sources data from IMDb. Free
      tier 1,000 requests/day, paid tier $1/month for more.
  - q: What about TMDb API?
    a: >-
      The Movie Database API is completely free with 40 requests per 10 seconds.
      Community-driven with comprehensive movie/TV data.
  - q: Can I get IMDb ratings?
    a: >-
      Yes, through OMDb API which includes IMDb ratings, or scrape IMDb data
      (check terms of service).
auth_setup_steps:
  - For OMDb - Sign up at omdbapi.com
  - Get API key via email
  - For TMDb - Sign up at themoviedb.org
  - Request API key from account settings
  - Include API key as query parameter in requests
---

While IMDb doesn't offer an official public API, developers can access comprehensive movie and TV show data through alternative APIs like OMDb (unofficial IMDb data) or TMDb (community-driven database). Get titles, ratings, cast, crew, posters, and more.

### What you can build

- Movie recommendation engines
- Entertainment tracking apps
- Film review platforms
- Watchlist applications
- Cinema and streaming finders
- Entertainment news aggregators
- Cast and crew databases
- Movie trivia games
