---
title: Spotify Web API
product_name: Spotify
logo: /api-hub/logos/spotify.png
category: data
category_title: Data & Analytics
category_description: >-
  Access rich data sources including maps, music catalogs, analytics, and more
  to power your data-driven applications.
category_gradient: from-green-500/15 to-green-500/5
category_badge_dark: bg-green-950/50 text-green-400 border-green-800/30
category_badge_light: bg-green-100 text-green-700 border-green-300
primary_keyword: Spotify API
secondary_keywords:
  - Spotify Web API
  - Music API
  - Spotify Developer API
  - Streaming API
description: >-
  Access Spotify's music catalog, user playlists, playback controls, and
  personalized recommendations through the Web API.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Completely free to use with rate limits. Commercial use requires Spotify
  Premium for certain features.
auth_type: oauth2
rate_limits: Standard rate limiting applies; 180 requests per minute for most endpoints.
docs_url: 'https://developer.spotify.com/documentation/web-api'
pricing_url: 'https://developer.spotify.com/documentation/web-api'
alternatives:
  - name: Apple Music API
    docs_url: 'https://developer.apple.com/documentation/applemusicapi'
  - name: YouTube Music API
    docs_url: 'https://developers.google.com/youtube/v3'
  - name: SoundCloud API
    docs_url: 'https://developers.soundcloud.com/docs/api'
last_verified_date: '2026-02-03'
popularity_score: 90
faq:
  - q: Is the Spotify API free to use?
    a: >-
      Yes, the Spotify Web API is free to use. However, certain playback
      features require users to have Spotify Premium.
  - q: Can I stream full songs through the API?
    a: >-
      You can control playback for authenticated users, but full streaming
      requires the Spotify app or web player with Premium subscription.
  - q: What data can I access?
    a: >-
      Track information, albums, artists, playlists, user libraries, search
      results, recommendations, and audio features.
  - q: Do users need Spotify accounts?
    a: >-
      Yes, users need to authenticate with their Spotify account for
      personalized features like playlists and playback control.
auth_setup_steps:
  - Create account at developer.spotify.com
  - Go to Dashboard and create a new app
  - Note your Client ID and Client Secret
  - Configure Redirect URIs for OAuth flow
  - Implement OAuth 2.0 authorization flow
  - Use access token in Authorization header as Bearer token
---

Spotify Web API provides comprehensive access to the world's largest music streaming platform. With over 500 million users and 100+ million tracks, the API enables developers to build rich music experiences, recommendations, and playback controls.

### What you can build

- Music discovery and recommendation apps
- Playlist generators and curators
- Social music sharing platforms
- Music analytics and visualization tools
- Workout and mood-based playlist creators
- Concert and artist discovery applications
- Music trivia and quiz games
- Audio analysis and mood detection tools
