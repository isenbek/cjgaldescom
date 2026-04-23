# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**cjgaldes.com** — personal site for CJ Galdes, focused on AI-powered business operations, workflow design, and UI-driven endpoint architecture at Nominate-AI.

Forked from [bradley.io](https://github.com/isenbek/bradley.io) (v1.0.49) as an independent repo. Same tech stack, independent content and data. Will be handed off to CJ.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router, Turbopack
- **Styling**: Tailwind CSS 4 with `@theme` directive and CSS custom properties
- **Language**: TypeScript (strict)
- **Animations**: Framer Motion, custom ambient canvas (floating leaves, text shimmer)
- **Data Viz**: D3.js, Recharts
- **MDX**: `@next/mdx` for rich content pages

### Theme System
Seven themes via `data-theme` attribute and `--brand-*` CSS custom properties:
- **Midnight** (default): `--brand-primary: #6366F1` (indigo/pink on dark navy)
- **Deep Sea**: `--brand-primary: #00F5FF`
- **Analog-Future**: `--brand-primary: #FF6B35`
- **Horizon** (light): `--brand-primary: #2563EB`
- **Ember**: `--brand-primary: #F59E0B`
- **Chlorophyll**: `--brand-primary: #22C55E`
- **Ultraviolet**: `--brand-primary: #A855F7`

Tailwind maps `--brand-*` vars to `sf-*` utility classes (e.g., `text-sf-orange`, `bg-sf-dark`).

### Project Structure
```
cjgaldescom/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── ai-pilot/           # AI Pilot License dashboard
│   ├── cost-analysis/      # Cost analysis with dynamic charts
│   ├── lab/                # Lab experiments
│   ├── mcp/                # MCP Catalog page
│   ├── papers/             # Research papers
│   ├── projects/           # Projects listing + [slug]
│   ├── services/           # Consulting services page
│   └── style-guide/        # Design system reference
├── components/
│   ├── ai-pilot/           # AI Pilot dashboard components
│   ├── ambient/            # Ambient animations (shimmer, leaves)
│   ├── home/               # Homepage components
│   ├── layout/             # Navigation, RootLayoutWrapper, VersionFooter
│   ├── mdx/                # MDX rendering components
│   └── ui/                 # Shared UI primitives
├── lib/                    # Utilities, data helpers
├── scripts/                # Pipelines and build info generation
├── public/                 # Static assets and data JSON files
├── cjgaldescom.service     # systemd unit (Next.js production)
└── deploy.sh               # Full deploy script
```

## Development Commands

```bash
npm install            # Install dependencies
npm run dev            # Next.js dev server (port 32223)
npm run build          # Production build
npm run lint           # ESLint
```

## Deployment

**Anti-Cloud. Host Local, Think Global.**

```bash
./deploy.sh            # Full deploy: lint, commit, bump, build, push, systemd restart, health check
```

- **Next.js**: systemd service `cjgaldescom` on port 32223
- **Nginx**: `cjgaldes.com` + `www.cjgaldes.com` proxy to 127.0.0.1:32223
- **SSL**: Let's Encrypt via certbot (auto-renew)
- **DNS**: BIND zone at `/etc/bind/zones/cjgaldes.com.zone`

## Key Conventions

1. Use `sf-*` Tailwind classes for themed colors (never hardcode hex in components)
2. Use `--brand-*` CSS vars for inline styles that must be theme-aware
3. Use `container-page` class for consistent page width (`max-w-lg` mobile, `md:max-w-2xl`, `lg:max-w-5xl`)
4. All pages get Navigation + VersionFooter via RootLayoutWrapper
5. Ambient animations (leaves, shimmer) render via AmbientLayer in the layout
6. Font families: `font-display` (Outfit) and `font-mono` (JetBrains Mono)

## Origin & Relationship to bradley.io

This repo was forked from bradley.io but is **fully independent** — no shared git history, no linked deployments. Content, data pipelines, and identity should be customized for CJ. The bradley.io repo continues to evolve separately.

## Contact & Resources

- **Site**: https://cjgaldes.com
- **Repo**: https://github.com/isenbek/cjgaldescom
- **Parent**: https://github.com/isenbek/bradley.io
