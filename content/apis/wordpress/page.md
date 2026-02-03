---
title: WordPress API
product_name: WordPress
logo: /api-hub/logos/wordpress.png
category: media
category_title: Media & Content
category_description: >-
  APIs for video platforms, music streaming, photography, content management,
  and social media content.
category_gradient: from-pink-500/15 to-pink-500/5
category_badge_dark: bg-pink-950/50 text-pink-400 border-pink-800/30
category_badge_light: bg-pink-100 text-pink-700 border-pink-300
primary_keyword: WordPress API
secondary_keywords:
  - WordPress REST API
  - CMS API
  - Content Management API
  - Blog API
description: >-
  Access and manage WordPress content including posts, pages, media, comments,
  and custom post types through the built-in REST API.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Completely free and open source. WordPress.com hosting from $4/month optional.
  Self-hosted free with your own server.
auth_type: basic
rate_limits: >-
  WordPress.com - 60 requests per minute. Self-hosted - no limits
  (configurable).
docs_url: 'https://developer.wordpress.org/rest-api'
pricing_url: 'https://wordpress.com/pricing'
alternatives:
  - name: Contentful
    docs_url: 'https://www.contentful.com/developers/docs'
  - name: Strapi
    docs_url: 'https://docs.strapi.io'
  - name: Ghost
    docs_url: 'https://ghost.org/docs/content-api'
last_verified_date: '2026-02-03'
popularity_score: 90
faq:
  - q: Is WordPress API free?
    a: >-
      Yes, completely free. Built into WordPress core since version 4.7.
      Available on all WordPress installations.
  - q: Do I need WordPress.com?
    a: >-
      No, works with self-hosted WordPress.org sites. WordPress.com is optional
      managed hosting.
  - q: What can I access via API?
    a: >-
      Posts, pages, media, comments, taxonomies, users, settings, and custom
      post types. Extensible via plugins.
  - q: How do I authenticate?
    a: >-
      Multiple methods - Application Passwords (recommended), OAuth 1.0a, JWT
      tokens, or cookie authentication.
auth_setup_steps:
  - For WordPress 5.6+ use Application Passwords (Settings > Users)
  - Or install JWT Authentication plugin
  - Or use OAuth 1.0a with appropriate plugin
  - Generate application password or token
  - Include credentials in Authorization header
  - 'For read-only public content, no auth needed'
---

WordPress REST API provides full programmatic access to the world's most popular CMS, powering over 40% of all websites. Create, read, update, and delete content, manage users, and build headless WordPress applications.

### What you can build

- Headless CMS applications
- Mobile apps for WordPress sites
- Content synchronization tools
- Multi-site management dashboards
- Custom publishing workflows
- Content aggregation platforms
- Static site generators with WP backend
- Admin tools and plugins
