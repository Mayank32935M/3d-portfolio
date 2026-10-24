# Composition Brief: Mayank Dabas — 3D Developer Portfolio

## Overview
A 20.0-second trailer-scale launch video celebrating Mayank Dabas's interactive 3D developer portfolio. The composition showcases the authentic 30-key 3D mechanical keyboard model with tactile keycap physics, live FORENSIC-X verifiable systems with cryptographic ledgers, and the interactive `/resume` doodle canvas.

## Composition Architecture
- **Root Element**: `<div id="root" data-composition-id="main" data-width="1920" data-height="1080">`
- **Resolution**: 1920x1080 Landscape (16:9)
- **Duration**: 20.0s (600 frames at 30 fps)
- **3D Engine**: WebGL via Three.js with hardware acceleration in HyperFrames
- **Timeline Engine**: GSAP 3.14.2 registered at `window.__timelines["main"]` with tick-synchronous rendering: `tl.eventCallback("onUpdate", renderThree)`

## 3D Asset Integration
- **Model**: `assets/keyboard/keycaps.glb`
- **Case**: 9 sliced procedural meshes (`case_00` to `case_22`) styled with `#171819` standard material (roughness 0.64, metalness 0.1).
- **Keycaps**: 30 keycaps arranged in 6 columns × 5 rows matching `SKILLS_DATA`.
- **Logos**: Vector SVGs rendered onto plane geometries on keycap tops with linear texture sampling and SRGB color space.
- **Physics**: Individual key depression animation (`targetY: -0.45`, `emissiveIntensity: 1.0`) on musical beats.

## Audio Design
- **BGM**: `assets/music/happy-beats-business-moves-vol-1-by-ende-dot-app.mp3` (20.0s loop)
- **Keypress SFX**: Authentic mechanical switch recordings (`assets/sfx/keyboard/keypress-001.wav` to `keypress-018.wav`) synchronized to keypress moments at 1.0s, 1.7s, 4.2s, 5.0s.
- **UI SFX**: `assets/sfx/ui/switch1.ogg` at scene transitions.

## Deliverables
- Video file: `brag-output/brag.mp4`
- Poster frame: `brag-output/brag.jpg` (baked into frame 0 of `brag.mp4`)
- Launch copy: `brag-output/share-copy.txt` and `brag-output/share-copy-variants.md`
