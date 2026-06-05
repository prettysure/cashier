# AGENTS.md

Guidance for cloud agents and automated development in this repository.

## Project overview

**Cashier** is a static checkout prototype where customers choose fiat or crypto payment methods, enter payment details, and view a demo payment result. See `README.md` for feature details.

## Repository branches

| Branch | Contents |
|--------|----------|
| `main` | Stub only (`README.md` with title). No runnable app yet. |
| `cursor/cashier-page-ec8a` | Full static prototype (`index.html`, `styles.css`, `app.js`). |

When `main` has no app files, check out the latest feature branch that contains `index.html` before running or testing the UI.

## Tech stack

- **Frontend:** vanilla HTML, CSS, and JavaScript (no build step, no package manager)
- **Dependencies:** none — no `npm install`, `pip install`, or similar required
- **Lint / test:** not configured in this repo

## Cursor Cloud specific instructions

### Running the app

This is a static site. Serve the repo root with any HTTP server (required for consistent behavior; opening `index.html` via `file://` also works for basic preview):

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/index.html`.

Use a tmux session for long-running dev servers so they survive between agent turns.

### Hello-world verification flow

1. Confirm the hero shows **Choose how you want to pay** and order total **$248.00**.
2. Keep **Fiat payment methods** selected (default).
3. Pick a method (e.g. **PayPal** under United States).
4. Fill all required fields, including **Receipt email** (`name@example.com`) and **Demo payment outcome**.
5. Click **Submit payment** and confirm the **Payment successful** (or other selected) result screen.

### Ports

| Service | Port | Notes |
|---------|------|-------|
| Static dev server | `8080` | Default used in cloud setup; any free port is fine |

### Environment variables

None required for local development.

### Gotchas

- **No CI, lint, or test scripts** — verification is manual browser testing or HTTP checks (`curl http://127.0.0.1:8080/index.html`).
- **Dynamic form fields** are injected by `app.js` after selecting a payment method; the submit button stays disabled until a method is selected.
- **Main vs feature branches:** agents starting on `main` must fetch and checkout a branch with the prototype before serving the app.
