# Tahwul Dashboard

A compliance and standards tracking dashboard built with React, TypeScript, and Material-UI. It provides data visualization for progress tracking, document management, and performance monitoring.

## Tech Stack

- **React** 19 with TypeScript
- **Vite** 7 (build tool + dev server)
- **Material-UI (MUI)** 7 with Emotion for styling
- **React Router DOM** 7 for routing
- **Recharts** 3 for chart visualizations

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Scripts

```bash
npm run dev       # Start dev server on http://localhost:3000
npm run build     # TypeScript compile + production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint on .ts/.tsx files
```

## Folder Structure

```
src/
├── app/                        # Root App component
├── assets/                     # SVG icon components
├── components/                 # Shared/reusable UI components
│   ├── layout/                 #   Main layout (Sidebar + Topbar + Outlet)
│   └── ui/
│       ├── sidebar/            #   Collapsible navigation drawer
│       ├── topbar/             #   Header with search, profile, notifications
│       ├── table-component/    #   Generic sortable table
│       ├── radial-bar-chart/   #   Circular progress chart
│       ├── center-text/        #   Text centering utility
│       └── recent-activities/  #   Activity feed
├── features/                   # Feature modules (business logic + UI)
│   ├── dashboard/              #   Dashboard feature
│   │   ├── progress-status-grid/   Progress cards by section
│   │   ├── timeline/               Timeline visualization
│   │   ├── performance-bar-chart/  Bar chart (Recharts)
│   │   ├── status-overview/        Status summary cards
│   │   ├── radial-score-chart/     Score ring charts
│   │   └── performance-leader/     Top performers display
│   └── perspectives/           #   Perspectives/Standards feature
│       ├── toggle-switch/          Tab toggle (Overview / Evidence)
│       ├── plannig-pogress/        Linear progress indicator
│       ├── stats-card/             Status metric cards
│       ├── overview/               Leaders list + document table
│       └── evidence/               Comments section
├── pages/                      # Thin page wrappers for routing
├── router/                     # Route definitions and paths
├── types/                      # Shared TypeScript types
├── utils/                      # Utility functions
├── styles/                     # Global/shared styles
├── main.tsx                    # Entry point
└── index.css                   # Global CSS
```

Each feature component follows a consistent naming convention:
- `component-name.component.tsx` — component logic
- `component-name.styles.ts` — Emotion styled components
- `component-name.constants.ts` — static data / config
- `component-name.types.ts` — TypeScript interfaces

## Routes

| Path | Page |
|------|------|
| `/` | Redirects to `/dashboard` |
| `/dashboard` | Dashboard |
| `/perspectives` | Perspectives / Standards |
| `/tracking` | Tasks (placeholder) |
| `/documents` | Documents (placeholder) |

## Major Components

### Dashboard

- **Timeline** — visual timeline bar with date markers and labels
- **Progress Status Grid** — card grid showing compliance progress across sections with color-coded statuses
- **Radial Score Charts** — ring charts for Overall Compliance Score and Audit Readiness
- **Performance Bar Chart** — Recharts bar chart for performance metrics
- **Status Overview** — summary cards for key statistics
- **Performance Leaders** — top performer cards
- **Recent Activities** — activity feed

### Perspectives

- **Planning Progress** — linear progress bar
- **Stats Cards** — metric cards (Total, Under Review, In Progress, Completed evidence)
- **Toggle Switch** — tab switcher between Overview and Evidence views
- **Overview Tab** — leaders list + sortable document details table
- **Evidence Tab** — comments section with card items

### Shared UI

- **Layout** — wraps all pages with a collapsible Sidebar and Topbar
- **Sidebar** — responsive navigation drawer (collapses on screens < 900px)
- **Topbar** — header bar with search input, profile dropdown, and notification icon
- **Table Component** — generic reusable table with column sorting
- **Radial Bar Chart** — reusable circular progress visualization
