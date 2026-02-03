---
title: Stripe API
product_name: Stripe
logo: /api-hub/api-hub/logos/stripe.png
category: payments
category_title: Payment & Billing APIs
category_description: Integrate secure payment processing, subscription management, and billing automation into your applications.
category_gradient: from-emerald-500/15 to-emerald-500/5
category_badge_dark: bg-emerald-950/50 text-emerald-400 border-emerald-800/30
category_badge_light: bg-emerald-100 text-emerald-700 border-emerald-300
primary_keyword: Stripe API
secondary_keywords:
  - payments API
  - subscriptions API
  - checkout API
description: >-
  Payments, subscriptions, invoicing, and embedded financial services via a
  developer-first API.
pricing_free_tier: true
pricing_starting_from: $0 (pay per transaction)
pricing_notes: No monthly minimums for standard payments; fees apply per transaction.
auth_type: api_key
rate_limits: Varies by endpoint; see docs.
docs_url: 'https://docs.stripe.com/api'
pricing_url: 'https://stripe.com/pricing'
alternatives:
  - name: Adyen
    docs_url: 'https://docs.adyen.com'
  - name: Braintree
    docs_url: 'https://developer.paypal.com/braintree/docs'
  - name: Checkout.com
    docs_url: 'https://docs.checkout.com'
last_verified_date: '2026-01-01'
popularity_score: 92
faq:
  - q: Does Stripe offer a free tier?
    a: You can start without a monthly fee; pricing is typically per transaction.
  - q: How do I authenticate?
    a: >-
      Use your secret API key on the server and publishable key on the client
      where applicable.
auth_setup_steps:
  - Create a Stripe account at stripe.com
  - Navigate to Developers > API keys in your dashboard
  - Copy your Publishable key for client-side and Secret key for server-side
  - Keep your Secret key secure and never expose it in client-side code
  - Include the key in your API requests using the Authorization header
---

Stripe provides APIs for payments, billing, invoicing, and more.

## What you can build

- Checkout flows with hosted or embedded UI
- Subscriptions and invoicing
- Marketplace payments with Connect


