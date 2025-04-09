# 🏓Table Tennis Tournament App

This project is a React-based web application for managing and viewing table tennis tournaments. The app is split into two modes:

- Admin Mode: Allows an administrator to update scores, manage pooling and knockout stages for each category.
- Viewer Mode: Provides a read-only view of the tournament scores and standings.

## Features

- **Tournament Categories:**

  - Singles
  - Doubles
  - Under 18
  - Family Event

- **Tournament Stages:**

  - **Pooling:** Displays players, match scores, and rankings.
  - **Knockout:** Shows match brackets and scores.

- **Admin Functionality:**

  - Update scores via simple forms.
  - Switch between pooling and knockout views for each category.

- **Viewer Functionality:**
  - Read-only display of tournament data.
  - Navigate between different categories and stages.

## Tech Stack

- \*\*React: For building the user interface.
- \*\*React Router: For routing between admin, viewer, and home pages.
- \*\*JavaScript : The primary programming language.
- \*\*CSS : For basic styling .

## Project Structure

```
/src
├── App.js                # Main app entry with routing and state management.
├── data.js               # Initial tournament data.
├── pages
│   ├── Home.js           # Home page with mode selection.
│   ├── Admin.js          # Admin dashboard.
│   ├── AdminCategory.js  # Admin view for a specific category.
│   ├── Viewer.js         # Viewer dashboard.
│   └── CategoryView.js   # Viewer view for a specific category.
├── utils
│   └── categories.js     # List of tournament categories.
└── components
    ├── admin
    │   ├── PoolingAdmin.js  # Admin pooling view.
    │   └── KnockoutAdmin.js # Admin knockout view.
    └── viewer
        ├── PoolingView.js   # Viewer pooling view.
        └── KnockoutView.js  # Viewer knockout view.
```

## Getting Started

### Prerequisites

- \*\*Node.js: Ensure you have Node.js installed (version 12 or later).
- \*\*npm or yarn: A package manager to install dependencies.
