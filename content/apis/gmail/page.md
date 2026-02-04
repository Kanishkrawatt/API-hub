---
title: Gmail API
product_name: Gmail
logo: /api-explorer/logos/gmail.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate messaging, chat, and communication features into your applications
  with APIs for WhatsApp, Instagram, SMS, and more.
category_gradient: from-red-500/15 to-red-500/5
category_badge_dark: bg-red-950/50 text-red-400 border-red-800/30
category_badge_light: bg-red-100 text-red-700 border-red-300
primary_keyword: Gmail API
secondary_keywords:
  - Email API
  - Google Workspace Email
  - SMTP API
  - Mail Integration API
description: >-
  Send, read, and manage Gmail emails programmatically. Build email clients,
  automate workflows, and integrate email into your applications.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Free with rate limits (1 billion quota units per day). Part of free Google
  Workspace access. Enterprise limits available.
auth_type: oauth2
rate_limits: 250 quota units per user per second; 1 billion units per day per project.
docs_url: 'https://developers.google.com/gmail/api'
pricing_url: 'https://developers.google.com/gmail/api/guides/quota'
alternatives:
  - name: SendGrid
    docs_url: 'https://docs.sendgrid.com'
  - name: Mailgun
    docs_url: 'https://documentation.mailgun.com'
  - name: Microsoft Outlook
    docs_url: 'https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview'
last_verified_date: '2026-02-03'
popularity_score: 93
faq:
  - q: Is Gmail API free?
    a: >-
      Yes, with generous free tier (1 billion quota units/day). Enterprise plans
      available for higher limits.
  - q: Can I send emails via the API?
    a: >-
      Yes, you can send emails, including attachments. Users must authenticate
      and grant permission to send on their behalf.
  - q: What about bulk email sending?
    a: >-
      Gmail API is not designed for bulk marketing emails. Use dedicated
      services like SendGrid for that. Daily sending limits apply.
  - q: Can I build an email client?
    a: >-
      Yes, full support for reading, searching, sending, and organizing emails.
      Many third-party email clients use Gmail API.
auth_setup_steps:
  - Create project in Google Cloud Console
  - Enable Gmail API
  - Create OAuth 2.0 credentials
  - Configure OAuth consent screen
  - Get Client ID and Secret
  - Implement OAuth 2.0 flow
  - Request Gmail scopes during authorization
---

Gmail API provides full programmatic access to Gmail mailboxes. Read, send, and manage emails, create labels, search messages, handle attachments, and build powerful email automation and integration tools on top of the world's most popular email service.

### What you can build

- Custom email clients and readers
- Email automation and workflow tools
- CRM email integration
- Support ticket systems from email
- Email analytics and tracking
- Automated email organization
- Newsletter and campaign tools
- Email backup and archival systems
