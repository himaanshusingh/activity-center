# Activity Center

A responsive React dashboard for tracking operational workflows across NAV, capital events, reports, and payments in a single interface.

## Demo

- Live Demo: [Add your demo link here](https://example.com)

> Replace the URL above with your deployed app link after publishing.

## Overview

Activity Center is a frontend project built with React + Vite.  
It provides a control-room style UI where users can:

- Switch across top-level workflow tabs
- Filter workflows by fund
- Search workflow records
- View progress and checkpoint statuses
- Open a detailed workflow modal with KPI cards, workflow steps, and investor-level capital tracking

The app currently uses a local JSON dataset as its source of truth, making it easy to prototype UI behavior before connecting backend APIs.

## Key Features

- **Responsive layout**
  - Mobile navbar and desktop/tablet navbar variants
  - Grid-based panel layout that adapts across screen sizes

- **Workflow navigation**
  - Tab navigation for:
    - NAV Workflows
    - Other Workflows
    - Capital Events
    - Reports
    - Payments

- **Filter and search controls**
  - Fund chips in the filter bar
  - Search input to filter NAV workflow entries

- **Data panels**
  - `NAV Overview` with progress bars, checkpoint pills, row click actions, and pagination UI
  - `Other Workflows` panel with status tags
  - `Capital Events` panel with event status tags and pagination UI
  - `Reports` panel for report-level tracking
  - `Payments` panel showing payment records and review status

- **Workflow modal**
  - Opens from NAV workflow rows
  - Dynamic KPI card values (e.g. progress)
  - Modal tabs
  - Workflow step tracking
  - Investor capital tracking table
  - Escape-key and backdrop close support

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Routing:** React Router DOM 6
- **Styling:** Utility-first CSS setup with Tailwind + custom design tokens/classes
- **Icons:** Lucide React
- **Utilities:** `clsx` + `tailwind-merge` for class composition
- **Linting:** ESLint 9

## Project Structure

```text
activity-center/
├─ src/
│  ├─ components/
│  │  ├─ common/          # Reusable UI primitives (panel, chips, tags, pagination, etc.)
│  │  ├─ layout/          # Navbar and filter bar
│  │  ├─ modal/           # Workflow detail modal
│  │  └─ panels/          # Dashboard panels (NAV, reports, payments, etc.)
│  ├─ context/
│  │  └─ ActivityContext.jsx  # Global app state and actions
│  ├─ data/
│  │  └─ activityData.json    # Local mock dataset
│  ├─ lib/
│  │  └─ utils.js             # Shared helper utilities
│  ├─ pages/
│  │  ├─ ActivityCentre.jsx
│  │  └─ NotFound.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

## State Management

Application state is managed via `ActivityContext`:

- `activeTab` for selected top navigation tab
- `activeFilter` for selected fund chip
- `searchQuery` for search input
- `modalOpen` and `modalData` for modal visibility/content
- `openModal()` and `closeModal()` actions for workflow detail interactions

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## Customizing Data

To update the dashboard content, edit:

- `src/data/activityData.json`

You can customize:

- Tabs and filters
- Panel counts and rows
- Workflow progress/checkpoints
- Modal defaults (KPI cards, workflow steps, investor table)

## Future Enhancements

- Wire data to backend APIs instead of local JSON
- Implement full behavior for status chips and cross-panel filtering
- Add real pagination logic based on filtered result lengths
- Add unit/integration tests for context and panel interactions
- Add authentication and role-based visibility for workflow data

## Deployment

You can deploy this Vite app to platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/) (with Vite static build)

Typical deploy flow:

1. Run `npm run build`
2. Deploy the generated `dist/` folder (or connect repo for CI/CD deploy)
3. Update the Demo link section in this README with the live URL

## License

This project is currently unlicensed. Add a license section/file if you plan to distribute it publicly.
