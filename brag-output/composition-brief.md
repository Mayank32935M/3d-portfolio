# Composition Brief: Mayank Dabas — Full Portfolio Trailer

## Executive Summary
A 20.0-second launch film representing Mayank Dabas's full portfolio scope: his identity as an AI & ML student at USAR, GGSIPU, his technical stack, national hackathon finalist projects (SIH 2026, SUTRAM 2026, Paytm AI Hackathon), the signature 30-key 3D mechanical keyboard, and the interactive `/resume` canvas.

## Composition Architecture
- **Root Element**: `<div id="root" data-composition-id="main" data-width="1920" data-height="1080">`
- **Resolution**: 1920×1080 Landscape (16:9)
- **Duration**: 20.0s (600 frames at 30 fps)
- **Engine**: Three.js WebGL (hardware accelerated) synchronized with GSAP 3.14.2 via tick callbacks (`tl.eventCallback("onUpdate", renderThree)`).

## Safe-Area Layouts & Collision Prevention
- **Scene 1 (Hero)**: Strict left-column typography (`width: 840px`), right-column 3D keyboard (`x: 2.1, y: -0.15`). Guaranteed zero text collision.
- **Scene 2 (Skills)**: Left-column 3D keyboard (`x: -1.3, y: -0.22`), right-column Technical Stack card (`width: 780px`). Clean simultaneous visibility of hardware model and skill descriptions.
- **Scene 3 (Projects)**: 3D keyboard recedes into ambient space; left column features multi-project impact (FORENSIC-X, REDZONE, Stivium), right column displays the authentic `ScrollingPreview` browser frame.
- **Scene 4 (Resume)**: Left column copy, right column interactive resume mockup with live highlighter and doodle tools.
- **Scene 5 (Closing Card)**: Centered high-contrast card with identity, credentials, and live links; keyboard settles cleanly below in bottom perspective.

## Deliverables
- Video file: `brag-output/brag.mp4`
- Poster frame: `brag-output/brag.jpg` (baked into frame 0 of `brag.mp4`)
- Launch copy: `brag-output/share-copy.txt` and `brag-output/share-copy-variants.md`
