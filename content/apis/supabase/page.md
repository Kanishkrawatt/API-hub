---
title: Supabase API
product_name: Supabase
logo: /api-explorer/logos/supabase.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: Supabase API
secondary_keywords:
  - Backend as a Service API
  - PostgreSQL API
  - Real-time Database API
  - Firebase Alternative API
description: >-
  Open-source Firebase alternative with PostgreSQL database, authentication,
  storage, real-time subscriptions, and edge functions. Build backend services
  without managing infrastructure.
pricing_free_tier: true
pricing_starting_from: Free (500MB database)
pricing_notes: >-
  Free tier 500MB database, 1GB file storage, 2GB bandwidth. Pro $25/project/mo,
  Team $599/mo, Enterprise custom.
auth_type: api_key
rate_limits: >-
  Free tier - reasonable usage. Pro - higher limits. Rate limits on Auth (30
  requests/hour for email), Storage, and Realtime connections.
docs_url: 'https://supabase.com/docs'
pricing_url: 'https://supabase.com/pricing'
alternatives:
  - name: Firebase
    docs_url: 'https://firebase.google.com/docs'
  - name: AWS Amplify
    docs_url: 'https://docs.amplify.aws'
  - name: PocketBase
    docs_url: 'https://pocketbase.io/docs'
last_verified_date: '2026-02-04'
popularity_score: 89
faq:
  - q: Is Supabase free?
    a: >-
      Yes, generous free tier with 500MB database, 1GB storage, 2GB bandwidth.
      Unlimited API requests (with reasonable usage).
  - q: What makes Supabase different from Firebase?
    a: >-
      Uses PostgreSQL (SQL) instead of NoSQL, fully open source, can self-host,
      better data portability and SQL support.
  - q: Can I use my own PostgreSQL?
    a: >-
      Yes, Supabase is open source. Self-host with your own Postgres or use
      managed hosting.
  - q: What about real-time features?
    a: >-
      Yes, real-time subscriptions to database changes, presence (online users),
      and broadcast messages via WebSockets.
auth_setup_steps:
  - Create Supabase account
  - Create new project
  - Get project URL and anon key from Settings > API
  - Use anon key for client-side requests
  - Generate service_role key for server-side admin access
  - Use apikey header or Authorization Bearer for requests
---

Supabase API provides a complete backend-as-a-service platform powered by PostgreSQL. Build full-stack applications with authentication, real-time subscriptions, file storage, edge functions, and a REST API auto-generated from your database schema.

### What you can build

- Full-stack web applications
- Real-time chat applications
- SaaS platforms
- Mobile app backends
- Social networks
- Content management systems
- E-commerce backends
- Collaborative tools
