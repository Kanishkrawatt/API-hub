---
title: Dropbox API
product_name: Dropbox
logo: /api-explorer/logos/dropbox.png
category: productivity
category_title: Cloud & Productivity
category_description: >-
  APIs for cloud storage, spreadsheets, calendars, and productivity tools from
  Google Workspace and beyond.
category_gradient: from-blue-500/15 to-blue-500/5
category_badge_dark: bg-blue-950/50 text-blue-400 border-blue-800/30
category_badge_light: bg-blue-100 text-blue-700 border-blue-300
primary_keyword: Dropbox API
secondary_keywords:
  - Cloud Storage API
  - File Sync API
  - File Sharing API
  - Document API
description: >-
  Access Dropbox cloud storage to upload, download, share files, and sync data
  across devices. Build file management and collaboration applications.
pricing_free_tier: true
pricing_starting_from: Free (2GB storage)
pricing_notes: >-
  Free 2GB storage. Plus $11.99/mo (2TB), Family $19.99/mo (2TB+6 users),
  Business from $15/user/mo. API free to use.
auth_type: oauth2
rate_limits: >-
  No strict documented limits. Rate limiting applies on per-user basis with
  exponential backoff for abuse.
docs_url: 'https://www.dropbox.com/developers/documentation'
pricing_url: 'https://www.dropbox.com/plans'
alternatives:
  - name: Google Drive
    docs_url: 'https://developers.google.com/drive'
  - name: OneDrive
    docs_url: 'https://learn.microsoft.com/onedrive/developer'
  - name: Box
    docs_url: 'https://developer.box.com'
last_verified_date: '2026-02-04'
popularity_score: 85
faq:
  - q: Is Dropbox API free?
    a: >-
      Yes, API access is free. Users need Dropbox account (free or paid).
      Storage limits depend on account type.
  - q: Can I build a sync client?
    a: >-
      Yes, full support for uploading, downloading, and syncing files with
      efficient delta/streaming APIs.
  - q: What about file sharing?
    a: >-
      Yes, create shared links, manage folder permissions, and collaborate on
      files via API.
  - q: Are there webhooks?
    a: 'Yes, webhooks available to get notifications when files/folders change.'
auth_setup_steps:
  - Create Dropbox account
  - Go to Dropbox App Console
  - Create new app
  - Choose API (Scoped access recommended)
  - Choose access type (App folder or Full Dropbox)
  - Get App key and App secret
  - Implement OAuth 2.0 flow
---

Dropbox API provides programmatic access to Dropbox's cloud storage platform used by over 700 million users. Build file sync applications, backup tools, document collaboration platforms, and integrate cloud storage into your applications.

### What you can build

- File backup and sync tools
- Document management systems
- Photo and media organizers
- Collaborative editing platforms
- Cloud storage integrations
- File sharing applications
- Automated workflow tools
- Cross-platform sync solutions
