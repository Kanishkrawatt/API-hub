---
title: Databricks API
product_name: Databricks
logo: /api-explorer/logos/databricks.png
category: developer-tools
category_title: Developer Tools
category_description: >-
  APIs for code repositories, version control, design tools, and developer
  productivity platforms.
category_gradient: from-slate-500/15 to-slate-500/5
category_badge_dark: bg-slate-950/50 text-slate-400 border-slate-800/30
category_badge_light: bg-slate-100 text-slate-700 border-slate-300
primary_keyword: Databricks API
secondary_keywords:
  - Data Platform API
  - Apache Spark API
  - Data Engineering API
  - ML Platform API
description: >-
  Manage Databricks workspaces, clusters, jobs, notebooks, and ML workflows
  programmatically. Automate data engineering and machine learning pipelines.
pricing_free_tier: true
pricing_starting_from: Free trial (14 days)
pricing_notes: >-
  Free trial 14 days $400 credit. Pricing based on DBUs (Databricks Units) -
  varies by cloud provider and workload type. Typically $0.07-0.60/DBU.
auth_type: bearer
rate_limits: >-
  No strict published limits. Fair use policy applies. Enterprise plans have
  higher limits.
docs_url: 'https://docs.databricks.com/api/workspace/introduction'
pricing_url: 'https://www.databricks.com/product/pricing'
alternatives:
  - name: AWS EMR
    docs_url: 'https://docs.aws.amazon.com/emr'
  - name: Google Dataproc
    docs_url: 'https://cloud.google.com/dataproc/docs'
  - name: Azure Synapse
    docs_url: 'https://learn.microsoft.com/azure/synapse-analytics'
last_verified_date: '2026-02-04'
popularity_score: 78
faq:
  - q: Is Databricks API free?
    a: >-
      Free 14-day trial with $400 credit. After that, pay-as-you-go based on
      compute usage (DBUs). API access included.
  - q: What can I automate?
    a: >-
      Cluster management, job scheduling, notebook execution, workspace admin,
      MLflow experiments, and Delta Lake operations.
  - q: REST or SDK?
    a: >-
      Both. REST API available with SDKs for Python, Java, Scala. Also CLI tool
      for automation.
  - q: Can I run Spark jobs?
    a: >-
      Yes, submit and monitor Spark jobs, manage clusters, configure autoscaling
      via API.
auth_setup_steps:
  - Sign up for Databricks account
  - 'Create workspace (AWS, Azure, or GCP)'
  - Go to User Settings
  - Generate Personal Access Token
  - Use token in Authorization Bearer header
  - Or use service principal for production
---

Databricks API provides programmatic access to the unified data analytics platform built on Apache Spark. Automate data engineering pipelines, manage ML workflows, orchestrate jobs, and scale big data processing in the cloud.

### What you can build

- Automated data pipelines
- ML workflow orchestration
- Cluster management automation
- Job scheduling systems
- Notebook execution engines
- Data quality monitoring
- Cost optimization tools
- CI/CD for data projects
