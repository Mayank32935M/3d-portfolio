# Brag Plan: Mayank Dabas — 3D Developer Portfolio (Reference-Accurate)

## What is this app?
An interactive 3D developer portfolio showcasing verifiable systems, applied AI, and full-stack engineering, powered by an authentic procedural 3D mechanical keyboard mapped to real developer skills, interactive doodle PDF résumé, and realtime multiplayer presence.

## The angle
Most developer portfolios are static walls of text and generic templates. Mayank built an actual procedural 30-key 3D mechanical keyboard you can type on, verifiable court-admissible forensics engines with SHA-256 custody ledgers, and a live canvas where visitors can doodle on his resume in real-time.

## Reference Fidelity & Asset Reuse
1. **Authentic 30-Key 3D Mechanical Keyboard**: Reuses the actual `assets/keyboard/keycaps.glb` asset and procedural 9-piece case slicing (`case_00` to `case_22`). The 30 keycaps are arranged in a 6 columns × 5 rows grid with individual color hex codes, SVG skill emblems, and tactile key depression physics.
2. **Authentic FORENSIC-X ScrollingPreview**: Replicates the portfolio's `ScrollingPreview` component with the `assets/backgrounds/forensic-x.jpg` backdrop, browser framing, and live court-verified SHA-256 custody ledger telemetry.
3. **Interactive Doodle Canvas at /resume**: Live resume view with the authentic doodle toolbar (`✏️ Pen`, highlighter colors `#ff7043`, `#5cc8ff`, `#ff6bb9`, `Download Signed PDF`) and animated neon SVG brush strokes.
4. **Kinetic Typography**: Masked word reveals, high WCAG AA contrast (100% pass), and bold display typography.

## Scene Progression (20.0s Total)
- **Scene 1 (0.0s – 3.8s) · The Hook**:
  - Cosmic space void with deep radial gradient `#0f172a` -> `#030712`.
  - Left: Kinetic masked text reveals: "Boring static resumes are officially dead. Meet the 30-Key 3D Terminal."
  - Right: Authentic 3D Mechanical Keyboard in hero orientation (`rotation: [0.12, -Math.PI / 6, 0.12]`).
  - Beats at 1.0s and 1.7s trigger realistic key depressions on Key Q (Python) and Key W (TypeScript) with authentic mechanical switch acoustics (`keypress-001.wav`, `keypress-006.wav`).
- **Scene 2 (3.8s – 8.8s) · The Procedural 3D Skill Engine**:
  - 3D Keyboard glides into center-front focus (`rotation: [0.24, Math.PI / 12, 0.04]`, `scale: 1.12`).
  - Sequential keypresses on beat:
    - 4.2s: Key Q (Python) presses down with emissive burst -> HUD Card: `Python: Verifiable AI & ML systems`
    - 5.0s: Key Y (Rust) presses down with emissive burst -> HUD Card: `Rust: High-performance core for desktop Stivium IDE`
    - 5.8s: Key F (Gemini API) presses down with emissive burst -> HUD Card: `Gemini API: Multimodal intelligence & reasoning agents`
    - 6.6s: Key I (React & Three.js) presses down with emissive burst -> HUD Card: `React & Three.js: 60 FPS interactive WebGL`
- **Scene 3 (8.8s – 13.5s) · Verifiable Systems & FORENSIC-X**:
  - Keyboard smoothly recedes into background ambient space.
  - Authentic `ScrollingPreview` component emerges with `forensic-x.jpg` backdrop.
  - Browser framing with live telemetry: `LEDGER HASH: e3b0c44298fc1c14...` | `STATUS: COURT-VERIFIED`.
  - Smooth vertical pan through the verified forensics dashboard.
- **Scene 4 (13.5s – 17.2s) · Interactive /resume Canvas**:
  - Authentic `/resume` canvas with the doodle toolbar.
  - Animated neon highlighter sweep across education and handwritten checkmark annotation: "✨ Hard Tech & Verifiable Systems Verified!"
- **Scene 5 (17.2s – 20.0s) · Kinetic Outro & Call-to-Action**:
  - 3D Keyboard floats into dynamic low-angle perspective with slow isometric drift.
  - Display title reveal: `MAYANK DABAS`
  - Subtitle: `AI & ML Engineer · Verifiable Systems · 3D Web`
  - Link pills: `3d-portfolio-mu-tan.vercel.app` & `github.com/Mayank32935M/3d-portfolio`

## Technical Details
- Engine: Three.js + GSAP 3.14.2 inside HyperFrames runtime
- Frame rate: 30 fps
- Resolution: 1920x1080 (16:9 Landscape)
- Deliverables: `brag.mp4`, `brag.jpg` (baked into frame 0), `share-copy.txt`, `share-copy-variants.md`
