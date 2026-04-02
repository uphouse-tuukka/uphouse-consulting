---
title: "Public Transport Website"
excerpt: "Modernized a major transport website through migration, search rebuild, and reusable component architecture."
publishDate: 2025-02-01
tags: ["Next.js", "NestJS", "ElasticSearch", "Azure"]
outcome: "Reduced frontend debt and launched a new search system used in production."
role: "Fullstack Developer focused on platform modernization"
problem: "The website needed ongoing feature delivery while carrying heavy technical debt, and the existing search experience no longer met user expectations for speed and relevance."
tried: "I addressed debt and delivery together by planning migration slices, moving from Next.js pages to app router, and designing shared UI patterns while integrating ElasticSearch-backed search services."
shipped: "A full Next.js 12-to-14 migration, a new site-wide ElasticSearch service, electronic forms capabilities, and a reusable component library that supported consistent implementation across teams."
metrics:
  - "Next.js 12 to 14 migration completed"
  - "New production search service launched"
  - "Component library adopted by broader team"
ctaLabel: "Talk about platform migrations"
ctaHref: "https://linkedin.com/in/tuukka-ylostalo"
---

## The problem

A major public transport operator's website needed ongoing development: new features for content producers, electronic forms, and a completely new search service. The codebase also carried significant technical debt.

## What I tried

Tackled technical debt head-on: migrated Next.js from version 12 to 14, transitioned from the pages router to the app router, and built an internal component library. For the search service, integrated ElasticSearch to replace the existing solution.

## What I shipped

- Next.js 12 to 14 migration with full pages-to-app router transition
- New site-wide search service powered by ElasticSearch
- Electronic forms system for customer-facing workflows
- Internal component library used across the organization

## Outcomes

- Reduced technical debt across the frontend codebase
- Search service handles production traffic
- Component library adopted by the wider team
