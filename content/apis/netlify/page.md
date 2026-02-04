---
title: Netlify API
product_name: Netlify
logo: /api-explorer/logos/netlify.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: Netlify API
secondary_keywords:
  - JAMstack API
  - Deployment API
  - Static Site API
  - Serverless Functions API
description: >-
  Manage Netlify sites, deployments, forms, functions, and DNS programmatically.
  Build custom deployment workflows and integrate Netlify into your development
  pipeline.
pricing_free_tier: true
pricing_starting_from: Free (Starter plan)
pricing_notes: >-
  Starter free (100GB bandwidth), Pro $19/member/mo, Business $99/member/mo,
  Enterprise custom. API included in all plans.
auth_type: bearer
rate_limits: 500 requests per minute per site. Higher limits on Business and Enterprise.
docs_url: 'https://docs.netlify.com/api/get-started'
pricing_url: 'https://www.netlify.com/pricing'
alternatives:
  - name: Vercel
    docs_url: 'https://vercel.com/docs/rest-api'
  - name: Cloudflare Pages
    docs_url: 'https://developers.cloudflare.com/pages'
  - name: GitHub Pages
    docs_url: 'https://docs.github.com/pages'
last_verified_date: '2026-02-04'
popularity_score: 84
faq:
  - q: Is Netlify API free?
    a: >-
      Yes, API access included in free Starter plan with 100GB bandwidth and 300
      build minutes per month.
  - q: Can I trigger builds via API?
    a: >-
      Yes, trigger builds, deploy sites, roll back deployments, and manage build
      hooks programmatically.
  - q: What about forms?
    a: >-
      Yes, access form submissions, export data, and integrate with external
      services via webhooks.
  - q: Can I manage DNS?
    a: >-
      Yes, create/update DNS records, manage domains, and configure redirects
      and proxies via API.
auth_setup_steps:
  - Log in to Netlify dashboard
  - Go to User Settings > Applications
  - Create new personal access token
  - Set token description and expiration
  - Use token in Authorization header as Bearer
---

Netlify API provides comprehensive access to the popular JAMstack deployment platform. Automate site deployments, manage serverless functions, handle form submissions, configure DNS, and build custom workflows for modern web development.

### What you can build

- Custom deployment pipelines
- Multi-site management dashboards
- Form submission handlers
- Build automation tools
- DNS management systems
- A/B testing frameworks
- Analytics integrations
- Branch preview systems
