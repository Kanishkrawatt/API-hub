---
title: Todoist API
product_name: Todoist
logo: /api-explorer/logos/todoist.png
category: productivity
category_title: Productivity & Organization
category_description: 'APIs for task management, note-taking, calendars, and productivity tools.'
category_gradient: from-blue-500/15 to-blue-500/5
category_badge_dark: bg-blue-950/50 text-blue-400 border-blue-800/30
category_badge_light: bg-blue-100 text-blue-700 border-blue-300
primary_keyword: Todoist API
secondary_keywords:
  - Task Management API
  - Todo List API
  - Project Management API
  - Productivity API
description: >-
  Manage tasks, projects, labels, and comments with Todoist's simple yet
  powerful task management API. Build productivity tools and integrate with the
  popular to-do app.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Free plan available, Pro $4/mo, Business $6/user/mo. REST API included in all
  plans. Sync API has lower rate limits on free.
auth_type: oauth2
rate_limits: >-
  Free - 50 sync requests/minute. Pro/Business - 100-200 req/min. REST API - 450
  req/15min.
docs_url: 'https://developer.todoist.com'
pricing_url: 'https://todoist.com/pricing'
alternatives:
  - name: Asana
    docs_url: 'https://developers.asana.com'
  - name: Microsoft To Do
    docs_url: 'https://learn.microsoft.com/graph/api/resources/todo-overview'
  - name: TickTick
    docs_url: 'https://developer.ticktick.com'
last_verified_date: '2026-02-04'
popularity_score: 81
faq:
  - q: Is Todoist API free?
    a: >-
      Yes, API access included in free plan with rate limits. Pro/Business get
      higher limits.
  - q: What's the difference between REST and Sync API?
    a: >-
      REST API - simple operations. Sync API - real-time sync, offline support,
      batch operations, and conflict resolution.
  - q: Can I create recurring tasks?
    a: >-
      Yes, create tasks with natural language dates and recurring patterns
      (every day, weekdays, etc.).
  - q: What about collaboration features?
    a: >-
      Yes, shared projects, comments, file attachments, and assignment features
      available via API.
auth_setup_steps:
  - Create Todoist account
  - Go to Settings > Integrations > Developer
  - Get API token for personal use
  - Or register OAuth app at developer.todoist.com
  - Implement OAuth 2.0 flow for user access
  - Use token in Authorization header as Bearer
---

Todoist API provides access to the popular task management platform used by millions. Build productivity tools, integrate task management into your workflows, and create custom applications that help people organize their work and life.

### What you can build

- Task automation tools
- Productivity dashboards
- Habit tracking applications
- Time management systems
- Email-to-task converters
- Voice assistant integrations
- Team collaboration tools
- Project planning applications
