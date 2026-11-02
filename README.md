# eMart Admin — E-Commerce Admin Dashboard

A frontend-only e-commerce admin dashboard built with React, Tailwind CSS v4, React Router, and Recharts. All data is simulated locally in `src/data/` — there is no backend.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Sidebar, Navbar, Layout, Card, StatCard, Table, SearchBar, Modal, StatusBadge, Charts
  context/      ThemeContext (light/dark mode, persisted to localStorage)
  data/         dashboard.js, products.js, orders.js, customers.js, analytics.js — dummy data
  pages/        Dashboard, Products, Orders, Customers, Inventory, Analytics, Settings
  utils/        format.js — currency/number/date formatting helpers
```

## Pages

- **Dashboard** — summary stat cards, revenue/sales/income charts, weekly & yearly sales, payment gateways
- **Products** — searchable/filterable table with edit/delete (UI only, delete has a confirm modal)
- **Orders** — searchable table with status filter tabs (Pending/Shipped/Delivered/Cancelled)
- **Customers** — searchable table with Active/Inactive filter
- **Inventory** — stock-level bars with low-stock / out-of-stock indicators and summary cards
- **Analytics** — monthly sales & revenue charts, orders by category, revenue by channel, top products
- **Settings** — editable profile form, notification toggles, light/dark theme switcher

## Notes

- All edit/delete/save actions are UI-only and operate on in-memory React state (via `useState`) — nothing persists to a server. Deleting a product removes it from local state; refreshing the page restores the original dummy data.
- Theme preference is saved to `localStorage` so it persists across reloads.
- Swap out the files in `src/data/` with real API calls whenever you're ready to connect a backend.
