# Brag Plan: Mayank Dabas — 3D Developer Portfolio (Full Portfolio Trailer)

## What is this app?
An interactive 3D developer portfolio showcasing Mayank Dabas's full technical profile: AI & ML undergraduate student at USAR, GGSIPU, developer of verifiable forensics frameworks, national hackathon finalist projects (SIH 2026, SUTRAM 2026, Paytm AI Hackathon), an authentic 30-key 3D mechanical keyboard, and a live doodle canvas at `/resume`.

## Creative Direction & Safe-Area Motion Architecture
1. **Preserved Signature 3D Keyboard**: Reuses the exact Three.js model from `keycaps.glb` and sliced 9-piece case geometry (`case_00` to `case_22`). Geometry, colors, and key mappings remain completely intact.
2. **Safe-Area Spatial Separation**:
   - **Scene 1**: Strict split — typography in left column (0–880px), 3D keyboard in right column (900–1920px). Eliminates all text collisions.
   - **Scene 2**: Inverted split — 3D keyboard in left column (100–950px), dedicated Technical Stack card in right column (1040–1800px).
   - **Scene 3**: Real Projects Showcase — 3D keyboard recedes into ambient background depth; stage is taken by multi-project impact (FORENSIC-X, REDZONE SIH 2026 National Finalist, Stivium IDE) and authentic `ScrollingPreview` with `assets/backgrounds/forensic-x.jpg`.
   - **Scene 4**: Interactive `/resume` view — authentic toolbar with live pen, highlighter color swatches, SVG neon highlight, and recruiter doodle card.
   - **Scene 5**: Centered identity card — Mayank Dabas, USAR GGSIPU, SIH 2026 Finalist, SUTRAM 2026 Nationals, with live portfolio and GitHub links, while keyboard rests cleanly in bottom perspective.

## 20-Second Scene Breakdown
- **Scene 1 (0.0s – 3.8s) · Identity & Signature Keyboard**:
  - Left: "Building Verifiable Systems. Applied AI & Interactive 3D."
  - Right: 3D mechanical keyboard at hero angle (`[0.12, -Math.PI / 6, 0.1]`).
  - Keypresses: Key Q (Python) at 1.0s, Key W (TypeScript) at 1.7s with authentic mechanical click SFX.
- **Scene 2 (3.8s – 8.0s) · Technical Arsenal & Live Keystrokes**:
  - Left: 3D keyboard tilted toward user (`rotation: [0.22, Math.PI / 10, 0.04]`).
  - Right: Technical Stack card with 4 illuminated rows:
    - 4.2s: Key Q (Python & FastAPI) -> Cryptographic ledgers
    - 5.0s: Key Y (Rust & Tauri) -> Stivium IDE native core
    - 5.8s: Key F (Gemini API & Agentic AI) -> Multimodal reasoning agents
    - 6.6s: Key I (React, Three.js & Next.js 16) -> 60 FPS WebGL runtimes
- **Scene 3 (8.0s – 13.0s) · Real Projects Showcase**:
  - Highlights:
    - FORENSIC-X (SUTRAM 2026 Nationals at NFSU)
    - REDZONE (Smart India Hackathon 2026 National Finalist, Team INDRI)
    - Stivium IDE (Sub-60MB memory-efficient desktop code editor)
  - Interactive ScrollingPreview browser frame with auto-scrolling telemetry.
- **Scene 4 (13.0s – 16.8s) · Interactive Doodle Résumé**:
  - Genuine interaction at `/resume` with live doodle toolbar.
  - Animated neon highlighter stroke and handwritten annotation card.
- **Scene 5 (16.8s – 20.0s) · Identity & Closing CTA**:
  - Centered high-contrast card: Mayank Dabas · USAR, GGSIPU · SIH 2026 Finalist.
  - Action pills: `3d-portfolio-mu-tan.vercel.app` & `github.com/Mayank32935M/3d-portfolio`.

## Deliverables
- Video file: `brag-output/brag.mp4` (4.0 MB, H.264, 30 fps, AAC audio, poster in frame 0)
- Poster frame: `brag-output/brag.jpg`
- Launch copy: `brag-output/share-copy.txt` and `brag-output/share-copy-variants.md`
