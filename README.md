# NexCorp  Next.js

Converted from single HTML file to a proper Next.js 14 project with App Router.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
nexcorp/
├── app/
│   ├── layout.tsx          # Root layout, ThemeProvider, metadata
│   ├── page.tsx            # Home page  composes all sections
│   └── globals.css         # All global styles + Tailwind directives
│
├── components/
│   ├── Navbar.tsx           # Sticky navbar with scroll blur
│   ├── MobileMenu.tsx       # Full-screen mobile nav overlay
│   ├── MobileMenuTrigger.tsx
│   ├── ThemePanel.tsx       # Slide-out theme switcher (10 themes)
│   ├── CursorGlow.tsx       # Cursor follow glow effect
│   ├── Hero.tsx             # Hero section + Three.js canvas
│   ├── HeroDashboardCard.tsx # Decorative card (pointer-events:none, no overlap)
│   ├── TypingText.tsx       # Animated typing effect
│   ├── Marquee.tsx          # Auto-scrolling client logos
│   ├── Services.tsx         # 6 service cards
│   ├── About.tsx            # About + animated stat counters
│   ├── Portfolio.tsx        # 5 portfolio project cards
│   ├── Team.tsx             # 4 team member cards
│   ├── Testimonials.tsx     # 3 testimonial cards
│   ├── Contact.tsx          # Contact info + form
│   ├── Footer.tsx           # Links + social icons
│   └── Animations.tsx       # Client: reveal scroll, counters, tilt
│
└── hooks/
    ├── useTheme.tsx         # Theme context  fast switching via rAF
    └── useReveal.ts         # IntersectionObserver reveal + counter hooks
```

## Fixes Applied

### 1. Theme switching lag
- Old: `document.documentElement.setAttribute('data-theme', ...)` called synchronously on every click
- Fix: Wrapped in `requestAnimationFrame()` to batch with browser paint cycle
- Also: CSS transitions scoped only to `background-color` and `color`, not `all`

### 2. Dashboard card overlapping text
- Old: Absolute-positioned floating elements with high z-index could overlap left column
- Fix: Card lives in separate right column of `lg:grid-cols-2`  physically cannot overlap left text
- Added `pointer-events: none` to the entire card container
- Card is `hidden lg:flex`  completely removed on mobile/tablet where overlap was worst

### 3. Fragment structure
- Every section is its own component file
- Server components where possible (no 'use client' unless needed)
- Client-only code (Three.js, IntersectionObserver, animations) isolated to leaf components
