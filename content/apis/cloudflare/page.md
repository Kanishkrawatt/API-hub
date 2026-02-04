---
title: Cloudflare API
product_name: Cloudflare
logo: /api-explorer/logos/cloudflare.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: Cloudflare API
secondary_keywords:
  - CDN API
  - DNS API
  - Security API
  - Edge Computing API
description: >-
  Manage Cloudflare services including DNS, CDN, security, Workers, Pages, and
  analytics. Automate web infrastructure and edge computing deployments.
pricing_free_tier: true
pricing_starting_from: Free
pricing_notes: >-
  Free tier includes CDN, DNS, DDoS protection, SSL. Pro $20/mo, Business
  $200/mo, Enterprise custom. Workers free 100K requests/day.
auth_type: api_key
rate_limits: '1,200 requests per 5 minutes per API token. Higher limits on Enterprise plans.'
docs_url: 'https://developers.cloudflare.com/api'
pricing_url: 'https://www.cloudflare.com/plans'
alternatives:
  - name: AWS CloudFront
    docs_url: 'https://docs.aws.amazon.com/cloudfront'
  - name: Fastly
    docs_url: 'https://developer.fastly.com/reference/api'
  - name: Akamai
    docs_url: 'https://techdocs.akamai.com/home/page/apis'
last_verified_date: '2026-02-04'
popularity_score: 89
faq:
  - q: Is Cloudflare API free?
    a: >-
      Yes, API access included in free tier. Manage unlimited sites with free
      CDN, DNS, and basic security features.
  - q: What can I manage via API?
    a: >-
      DNS records, CDN settings, firewall rules, Workers scripts, Pages
      deployments, SSL certificates, analytics, and more.
  - q: Can I deploy Workers via API?
    a: >-
      Yes, full API support for deploying and managing Cloudflare Workers
      (serverless functions at the edge).
  - q: What about rate limits?
    a: >-
      1,200 requests per 5 minutes. Use ETags and conditional requests to
      optimize. Enterprise plans have higher limits.
auth_setup_steps:
  - Create Cloudflare account
  - Add your domain to Cloudflare
  - Go to My Profile > API Tokens
  - Create API Token with specific permissions
  - Or use Global API Key (less secure)
  - Include in Authorization Bearer header or X-Auth-Key header
---

Cloudflare API provides comprehensive access to Cloudflare's global network powering millions of websites. Manage DNS, CDN, security, Workers (edge computing), Pages, analytics, and more to automate web infrastructure at scale.

### What you can build

- Infrastructure automation tools
- DNS management systems
- Deployment automation
- Security rule managers
- Analytics dashboards
- Multi-domain management
- Edge computing applications
- CDN configuration tools
