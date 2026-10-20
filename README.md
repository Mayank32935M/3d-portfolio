<div align="center">

# 🚀 Mayank Dabas — 3D Developer Portfolio

**An interactive 3D developer portfolio showcasing verifiable systems, applied AI, and full-stack engineering.** Press keys on the 3D keyboard, explore projects, test the interactive PDF doodle resume, and chat in realtime.

[![GitHub stars](https://img.shields.io/github/stars/Mayank32935M/3d-portfolio?style=flat&logo=github)](https://github.com/Mayank32935M/3d-portfolio/stargazers)
[![Forks](https://img.shields.io/github/forks/Mayank32935M/3d-portfolio?style=flat&logo=github)](https://github.com/Mayank32935M/3d-portfolio/network/members)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.2-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mayank32935M/3d-portfolio)

</div>

---

## ✨ Highlights & Features

- **⌨️ Procedural 3D Mechanical Keyboard** — Procedurally generated 30-key Chibi keyboard mapping verified skills from my resume. Hover or press letter keys to illuminate keycaps and trigger 3D text descriptions.
- **🛡️ Verifiable Projects Showcase** — Featured systems including FORENSIC-X, Suraksha Sense, NULL Game, Stivium IDE, and REDZONE.
- **📄 Interactive Doodle Résumé** — Live PDF canvas with full doodle, pen, eraser, and color controls at `/resume`.
- **🌐 Realtime Multiplayer** — Live cursor tracking, presence detection, and visitor chat.
- **🌌 Space & Cosmic Aesthetics** — Dynamic particle background, responsive layouts, and buttery GSAP + Framer Motion transitions.
- **🌓 Theme Engine** — Full light & dark mode support with tailored contrast.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | Next.js 16.2.2 (Turbopack), React 19.2.4, TypeScript |
| **3D & Graphics** | @chibi3d/runtime, Three.js, React Three Fiber |
| **Styling & UI** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animations** | GSAP, Framer Motion, Lenis Smooth Scroll |
| **Realtime & State** | Socket.io, React Context |
| **Email & Services** | Resend, Umami Analytics |

---

## 🚀 Featured Projects

- **[FORENSIC-X](https://github.com/Mayank32935M/FORENSIC-X)** — Verifiable digital forensics and incident reconstruction framework with SHA-256 hash-chained custody ledgers. Built for Nationals at Hackathon SUTRAM 2026 (NFSU).
- **[Suraksha Sense](https://github.com/Mayank32935M/Suraksha-Sense)** — AI insurance gap advisor with Gemini analysis and Sarvam AI Hindi voice response (Paytm Build for India AI Hackathon).
- **[NULL Game](https://github.com/Mayank32935M/null-game)** — Psychological intelligence thriller game and stateful simulation engine.
- **[Stivium IDE](https://github.com/Mayank32935M/Stivium)** — Extensible desktop code editor with a high-performance Rust core and TypeScript + Tailwind frontend.
- **[REDZONE](https://github.com/neptn-ui/Redzone)** — Geospatial decision-support tool for flood relocation in Assam. National Finalist at Smart India Hackathon 2026 (SIH 2026, Team INDRI).

---

## 💻 Getting Started

### Prerequisites

- Node.js 20.9+ (LTS recommended)
- [pnpm](https://pnpm.io/) 10+ (or `pnpm 11`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mayank32935M/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Configure the following in `.env.local`:
   | Variable | Required | Description |
   |---|---|---|
   | `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |
   | `NEXT_PUBLIC_WS_URL` | No | WebSocket server URL for realtime cursors and chat |
   | `UMAMI_DOMAIN` | No | Umami analytics script URL |
   | `UMAMI_SITE_ID` | No | Umami website ID |

4. **Start the local development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or specify `-p 3001`) to view the site.

---

## 🧪 Code Quality & Build Checks

Before submitting or deploying changes:

```bash
# Typecheck
pnpm typecheck

# Lint check
pnpm lint

# Production build test
pnpm build
```

---

## 📄 License & Attribution

This project is licensed under the [MIT License](LICENSE) © 2026 Mayank Dabas.

- **Base Template**: Based on the 3D portfolio architecture by [Naresh Khatri](https://github.com/Naresh-Khatri/3d-portfolio).
- **Customization & Engineering**: Fully personalized, rebuilt, and maintained by [Mayank Dabas](https://github.com/Mayank32935M).
