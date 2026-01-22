---
title: "Stripe API"
product_name: "Stripe"
logo: "https://img.logo.dev/stripe.com?token=pk_ZKnUWWMjQXSYBXtSHa3Hmw&retina=true"
category: "payments"
category_title: "Payments & Billing"
category_description: "Payment processing, subscription management, and financial infrastructure APIs for modern businesses"
primary_keyword: "Stripe API"
secondary_keywords:
  - "payments API"
  - "subscriptions API"
  - "checkout API"
description: "Payments, subscriptions, invoicing, and embedded financial services via a developer-first API."
pricing_free_tier: true
pricing_starting_from: "$0 (pay per transaction)"
pricing_notes: "No monthly minimums for standard payments; fees apply per transaction."
auth_type: "api_key"
rate_limits: "Varies by endpoint; see docs."
docs_url: "https://docs.stripe.com/api"
pricing_url: "https://stripe.com/pricing"
alternatives:
  - "Adyen"
  - "Braintree"
  - "Checkout.com"
last_verified_date: "2026-01-01"
faq:
  - q: "Does Stripe offer a free tier?"
    a: "You can start without a monthly fee; pricing is typically per transaction."
  - q: "How do I authenticate?"
    a: "Use your secret API key on the server and publishable key on the client where applicable."
auth_setup_steps:
  - "Create a Stripe account at stripe.com"
  - "Navigate to Developers > API keys in your dashboard"
  - "Copy your Publishable key for client-side and Secret key for server-side"
  - "Keep your Secret key secure and never expose it in client-side code"
  - "Include the key in your API requests using the Authorization header"
---

## About the API

Stripe provides APIs for payments, billing, invoicing, and more.

## What you can build

- Checkout flows with hosted or embedded UI
- Subscriptions and invoicing
- Marketplace payments with Connect


