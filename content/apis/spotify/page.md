---
title: Spotify Web API
product_name: Spotify
logo: /api-explorer/logos/spotify.png
category: media
category_title: Media & Content
category_description: >-
  APIs for video platforms, music streaming, photography, content management,
  and social media content.
category_gradient: from-pink-500/15 to-pink-500/5
category_badge_dark: bg-pink-950/50 text-pink-400 border-pink-800/30
category_badge_light: bg-pink-100 text-pink-700 border-pink-300
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
