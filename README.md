# Orbis FactoryOS

Marketing site for **Orbis FactoryOS** from Orbis AI Technologies — the intelligence layer that transforms factory operations with Factory OS and AI.

The visual system follows the Orbis AI Technologies logo (header uses the uploaded wordmark on a white plate) with crimson circuit accents on black. Home uses a modern industry-operations floor as the live background for how FactoryOS transforms production and workforce.

## Pages

- **Home** — hero on a factory floor, live snapshot, detect-to-measure loop, production + workforce + Copilot
- **Services** — Production Intelligence, Workforce Intelligence, Copilot, integrations
- **Use Cases** — industry stories with filters
- **Contact Us** — contact details and message form
- **Request for Demo** — plant walkthrough request

Forms validate locally and show a success state (no backend required).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) if you start with `npm run dev -- -p 4321`, or the port printed by Next.js.

```bash
npm run build
npm start
```

Production preview in this environment uses port **4321**:

```bash
npx next start --hostname 0.0.0.0 --port 4321
```

## Share and deploy

The in-agent Preview (`http://127.0.0.1:4321`) is only for this Cloud Agent session. A **public share link** needs a host on the internet.

**While this agent is running**, a Cloudflare quick tunnel can expose the same production server. That hostname changes each time the tunnel starts and dies when the agent stops.

**Durable public site** (pick one):

1. **GitHub Pages** — push `main` to [c0ntr1butr/Orbis-AI-Website](https://github.com/c0ntr1butr/Orbis-AI-Website) from a logged-in machine (see below). After Actions, enable Pages on the `gh-pages` branch. URL: [https://c0ntr1butr.github.io/Orbis-AI-Website/](https://c0ntr1butr.github.io/Orbis-AI-Website/)
2. **Vercel** — `npx vercel` in this repo (or Import the GitHub repo). `vercel.json` marks the project as Next.js. Do not set `GITHUB_PAGES` on Vercel.

## GitHub Pages

Target repo: [c0ntr1butr/Orbis-AI-Website](https://github.com/c0ntr1butr/Orbis-AI-Website)

This Cloud Agent cannot push to GitHub without a personal access token. From a machine that is logged into GitHub:

```bash
git remote add github https://github.com/c0ntr1butr/Orbis-AI-Website.git
git push -u github main
```

Pushing `main` runs `.github/workflows/pages.yml`, which builds a static export (`GITHUB_PAGES=true`) and publishes `out/` to the `gh-pages` branch.

1. **Settings → Pages → Build and deployment → Source: Deploy from a branch → `gh-pages` / `/ (root)`**.
2. Site URL: [https://c0ntr1butr.github.io/Orbis-AI-Website/](https://c0ntr1butr.github.io/Orbis-AI-Website/)

Local `npm run build` / `npm start` must **not** set `GITHUB_PAGES`, so the app still runs as a Node server without the `/Orbis-AI-Website` prefix.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
