---
title: OpenStreetMap API
product_name: OpenStreetMap
logo: /api-explorer/logos/openstreetmap.png
category: maps
category_title: Maps & Location
category_description: >-
  APIs for mapping, geolocation, weather data, and location-based services.
category_gradient: from-green-500/15 to-green-500/5
category_badge_dark: bg-green-950/50 text-green-400 border-green-800/30
category_badge_light: bg-green-100 text-green-700 border-green-300
primary_keyword: OpenStreetMap API
secondary_keywords:
  - OSM API
  - Open Source Maps API
  - Mapping API
  - Geographic Data API
description: >-
  Access free, open-source map data and services. Search locations, get
  directions, display maps, and use community-contributed geographic data.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Completely free and open source. Tile usage has limits (check usage policy).
  Commercial use allowed with attribution.
auth_type: none
rate_limits: >-
  Nominatim (search) - 1 req/sec; Tile servers - respect usage policy; consider
  self-hosting for heavy use.
docs_url: 'https://wiki.openstreetmap.org/wiki/API'
pricing_url: 'https://operations.osmfoundation.org/policies/tiles'
alternatives:
  - name: Google Maps
    docs_url: 'https://developers.google.com/maps/documentation'
  - name: Mapbox
    docs_url: 'https://docs.mapbox.com'
  - name: HERE Maps
    docs_url: 'https://developer.here.com/documentation'
last_verified_date: '2026-02-03'
popularity_score: 80
faq:
  - q: Is OpenStreetMap really free?
    a: >-
      Yes, completely free and open source under ODbL license. Attribution
      required. Commercial use allowed.
  - q: Can I use it in production apps?
    a: >-
      Yes, but respect usage limits on public servers. For heavy use, consider
      self-hosting tiles or using a service provider.
  - q: How does it compare to Google Maps?
    a: >-
      Free and open, but may have less detailed data in some regions.
      Community-driven updates. Great for privacy-conscious apps.
  - q: What APIs are available?
    a: >-
      Main API (data editing), Nominatim (search/geocoding), Overpass
      (querying), and tile servers (map display).
auth_setup_steps:
  - No API key required for basic usage
  - 'For editing data, create OSM account'
  - Set proper User-Agent header in requests
  - Follow usage policy and rate limits
  - Consider using third-party providers for production
---

OpenStreetMap (OSM) provides free, editable map data created by a community of millions of contributors. Access geographic data, search locations, get map tiles, and build mapping applications without licensing fees or restrictions.

### What you can build

- Custom map visualizations
- Location search and geocoding
- Route planning applications
- Geographic data analysis tools
- Open-source navigation apps
- POI (point of interest) finders
- Real estate and property maps
- Delivery and logistics routing
