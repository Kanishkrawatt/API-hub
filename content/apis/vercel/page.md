---
title: Vercel API
product_name: Vercel
logo: /api-explorer/logos/vercel.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: Vercel API
secondary_keywords:
  - Deployment API
  - Serverless API
  - Hosting API
  - Edge Functions API
description: >-
  Deploy and manage websites and serverless functions on Vercel.
  Programmatically control deployments, domains, environment variables, and edge
  configurations.
pricing_free_tier: true
pricing_starting_from: Free (Hobby plan)
pricing_notes: >-
  Hobby free, Pro $20/user/mo, Enterprise custom. API access on all plans.
  Usage-based pricing for bandwidth and serverless invocations.
auth_type: bearer
rate_limits: 100 requests per minute on Hobby. 600 req/min on Pro. Higher on Enterprise.
docs_url: 'https://vercel.com/docs/rest-api'
pricing_url: 'https://vercel.com/pricing'
alternatives:
  - name: Netlify
    docs_url: 'https://docs.netlify.com/api/get-started'
  - name: Cloudflare Pages
    docs_url: 'https://developers.cloudflare.com/api'
  - name: Railway
    docs_url: 'https://docs.railway.app/reference/public-api'
last_verified_date: '2026-02-04'
popularity_score: 86
faq:
  - q: Is Vercel API free?
    a: >-
      Yes, API access included in free Hobby plan. Subject to usage limits and
      rate limiting.
  - q: Can I trigger deployments via API?
    a: >-
      Yes, trigger deployments, get deployment status, roll back, and manage
      deployment aliases.
  - q: What about domains?
    a: >-
      Yes, add/remove domains, configure DNS, manage SSL certificates, and set
      up redirects programmatically.
  - q: Can I manage environment variables?
    a: >-
      Yes, create, update, and delete environment variables for different
      environments (production, preview, development).
auth_setup_steps:
  - Log in to Vercel dashboard
  - Go to Account Settings > Tokens
  - Create new token
  - Set scope and expiration
  - Use token in Authorization header as Bearer
---

Vercel API provides complete control over the leading platform for frontend developers. Automate deployments, manage domains and SSL, configure edge functions, and build custom deployment workflows for Next.js and other frameworks.

### What you can build

- Custom deployment dashboards
- CI/CD automation tools
- Multi-tenant deployment systems
- Domain management platforms
- Analytics integrations
- Automated rollback systems
- Environment config managers
- Preview deployment tools
