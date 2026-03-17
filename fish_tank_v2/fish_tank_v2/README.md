# 🐠 Idea Fish Tank

> A playful idea storage app where every idea becomes a fish that swims around a virtual tank.

## What it does

- **Add ideas** via the ADD IDEA button — each idea spawns as a unique animated fish
- **14 sea creature types** — fish, eels, jellyfish, crabs and more, selected per-idea
- **Smooth organic swimming** using Motion (Framer Motion) keyframe paths
- **Click any fish** to view, edit, or delete its idea
- **Mark ideas complete** — fish turn "shiny" with a golden glow and sparkle animation
- **Persists across sessions** — all ideas are saved to `localStorage`
- **Mobile-friendly** — fully responsive using `clamp()` for dynamic scaling

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Motion (`motion/react`) |
| Build | Vite |
| Assets | Figma-exported sprites + backgrounds |

---

## Deploy to Vercel

### Step 1 — Export from Figma Make to GitHub

In Figma Make, use the **Export to GitHub** option to push the full source to a repo.

### Step 2 — Import into Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Vercel will auto-detect Vite — no extra config needed
4. Click **Deploy** ✅

A `vercel.json` is already included so page refreshes don't 404.

### Build settings (auto-detected, no changes needed)

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `vite build` |
| Output Directory | `dist` |

---

## Run Locally

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview the production build
pnpm preview
```

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Root — state, localStorage, layout
│   └── components/
│       ├── SwimmingFish.tsx    # Animation logic + fish type selection
│       ├── IdeaModal.tsx       # Add / Edit / Delete modal
│       ├── AddIdeaButton.tsx   # Animated add button (idle + hover states)
│       ├── Sparkle.tsx         # Sparkle overlay for completed fish
│       ├── Fish.tsx – Fish11.tsx  # Fish sprite components
│       ├── FishEel.tsx
│       └── FishCrab.tsx
├── imports/                    # Figma-exported SVG + React components
└── styles/                     # Tailwind + theme tokens
```

---

## A note on image assets

Fish sprites and the tank background were exported from Figma using the `figma:asset/` import scheme, which Figma Make resolves at build time. The built `dist/` output has all images correctly bundled and works anywhere — no extra steps needed after deploying the Vercel build.
