# Vid-Port | Video Production & Motion Portfolio

A high-retention video production and motion graphics portfolio built with React, Vite, and Tailwind CSS. The interface features a custom Non-Linear Editor (NLE) timeline container for showcasing showreels, kinetic typography, and a synchronized interactive scroll system.

---

## 🚀 Key Features

* **Custom NLE Interface:** An interactive video playback monitor and track layout mimicking standard editing software.
* **Kinetic Typography:** Custom high-retention text entry transitions powered by Framer Motion.
* **Synchronized Scroll Intercept:** A custom JavaScript-managed smooth snap-scroll engine with index state tracking to prevent navigation link desyncs.
* **Tailwind Architecture:** Clean, utility-first dark mode styling optimized for video presentation.

---

## 🛠️ Tech Stack

* **Core:** React 19 + Vite
* **Styling:** Tailwind CSS
* **Animation:** Framer Motion
* **Deployment:** GitHub Pages (`gh-pages`)

---

## 💻 Local Development

Clone the repository, then run all necessary commands:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (outputs to dist/)
npm run build
```

---

## 📦 Deployment

This project is configured to build and deploy straight to GitHub Pages using the `gh-pages` branch deployment script. Push a fresh production build live with:

```bash
npm run deploy
```