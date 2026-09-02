---
title: Compatibility matrix
sidebar_label: Compatibility matrix
description: 'Compatibility matrix for Siemens Industrial Experience Version 5.'
---

# Compatibility matrix

**Status:** Next &middot; **Released:** ~ May 2026

## Required packages

| Package | Version |
| --- | --- |
| `@siemens/ix` | 5.x |
| `@siemens/ix-icons` | ^3.2.0 |

## Framework wrappers

| Package | Version | Framework requirement |
| --- | --- | --- |
| `@siemens/ix-react` | 5.x | React ^18 \|\| ^19 |
| `@siemens/ix-angular` | 5.x | Angular >=20 |
| `@siemens/ix-vue` | 5.x | Vue >=3.2.45 |

## Third-party integrations

| Package | Version | Library requirement |
| --- | --- | --- |
| `@siemens/ix-aggrid` | 5.x | AG Grid ^33 |
| `@siemens/ix-echarts` | 3.x | ECharts ^5.3.3 |

## Runtime

| Requirement | Version |
| --- | --- |
| Node.js | 22.x |
| TypeScript | ~5.4 – ~5.8 |

## Tested in CI

We validate these library versions in the monorepo’s test applications using automated CI pipelines.

| Framework / Library | Tested version |
| --- | --- |
| React | ^19.1.0 |
| Angular | ^20.x |
| Vue | ^3.4.34 |
| Next.js | ^16.1.7 |
| Ionic (React) | ^8.7.4 |
| AG Grid | ^33.1.1 |
| ECharts | ^5.5.1 |
