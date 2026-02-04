---
title: WhatsApp API
product_name: WhatsApp
logo: /api-explorer/logos/whatsapp.png
category: communication
category_title: Communication & Messaging
category_description: >-
  Integrate messaging, chat, and communication features into your applications
  with APIs for WhatsApp, Instagram, SMS, and more.
category_gradient: from-emerald-500/15 to-emerald-500/5
category_badge_dark: bg-emerald-950/50 text-emerald-400 border-emerald-800/30
category_badge_light: bg-emerald-100 text-emerald-700 border-emerald-300
primary_keyword: WhatsApp API
secondary_keywords:
  - WhatsApp Business API
  - WhatsApp Cloud API
  - Business Messaging API
  - Meta WhatsApp API
description: >-
  Send and receive WhatsApp messages programmatically with the official Business
  API for customer engagement and support.
pricing_free_tier: true
pricing_starting_from: 'Free for first 1,000 conversations/month'
pricing_notes: >-
  Free tier includes 1,000 service conversations; additional conversations
  charged based on country and conversation type.
auth_type: oauth2
rate_limits: 80 messages per second per phone number; varies by tier.
docs_url: 'https://developers.facebook.com/docs/whatsapp'
pricing_url: 'https://developers.facebook.com/docs/whatsapp/pricing'
alternatives:
  - name: Twilio
    docs_url: 'https://www.twilio.com/docs'
  - name: Telegram Bot API
    docs_url: 'https://core.telegram.org/bots/api'
  - name: Slack API
    docs_url: 'https://api.slack.com'
last_verified_date: '2026-02-03'
popularity_score: 92
faq:
  - q: What is the difference between Cloud API and On-Premises API?
    a: >-
      Cloud API is hosted by Meta, easier to set up, and recommended for most
      use cases. On-Premises requires hosting infrastructure yourself.
  - q: Can I send promotional messages?
    a: >-
      No, WhatsApp Business API is for transactional and customer service
      messages only. Marketing requires opt-in template messages.
  - q: What is a conversation?
    a: >-
      A 24-hour session initiated by either business or customer. Multiple
      messages within 24 hours count as one conversation.
  - q: Do I need Facebook Business Manager?
    a: >-
      Yes, you need a Facebook Business Manager account to access the WhatsApp
      Business API.
auth_setup_steps:
  - Create Meta for Developers account at developers.facebook.com
  - Create a Meta App with WhatsApp product
  - Set up WhatsApp Business Account
  - Register phone number for API access
  - Get access token from App Dashboard
  - Use token in Authorization header as Bearer token
---

WhatsApp Business API enables businesses to send and receive WhatsApp messages at scale. With over 2 billion users worldwide, WhatsApp is one of the most powerful channels for customer communication, support, and engagement.

### What you can build

- Customer support chatbots and live chat
- Order notifications and delivery updates
- Appointment reminders and confirmations
- Two-factor authentication systems
- Customer engagement and retention tools
- Automated FAQ and support systems
- Multi-channel customer communication platforms
