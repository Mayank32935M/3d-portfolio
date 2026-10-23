import { PERFORMANCE_CONFIG } from "@/config/performance";

export type GraphicsSettings = {
  dpr: number;
  shadows: boolean;
  softShadows: boolean;
  ao: boolean;
  bloom: boolean;
  lighting: boolean;
};

const BASIC: GraphicsSettings = {
  dpr: 1.25,
  shadows: false,
  softShadows: false,
  ao: false,
  bloom: false,
  lighting: false,
};

export const GRAPHICS_LEVELS: readonly GraphicsSettings[] = [
  // Mobile / Power-save Tier 0: Lean rendering, no heavy shader passes
  { ...BASIC, dpr: 1.0 },
  // Mobile Tier 1: Crisp text, lighting, standard shadows (no PCSS)
  { ...BASIC, dpr: 1.35, lighting: true, shadows: true, softShadows: false },
  // Mobile / Laptop Tier 2 (Balanced Default)
  { ...BASIC, dpr: 1.5, lighting: true, shadows: true, softShadows: false },
  // Desktop Tier 3: Soft shadows enabled
  { ...BASIC, dpr: 1.6, lighting: true, shadows: true, softShadows: PERFORMANCE_CONFIG.graphics.softShadowsDesktop },
  // Desktop Tier 4: Soft shadows + AO
  { ...BASIC, dpr: 1.75, lighting: true, shadows: true, softShadows: PERFORMANCE_CONFIG.graphics.softShadowsDesktop, ao: true },
  // Desktop High Tier 5: Full eye-candy (Bloom + AO + Soft Shadows)
  { ...BASIC, dpr: PERFORMANCE_CONFIG.graphics.desktopMaxDpr, lighting: true, shadows: true, softShadows: true, ao: true, bloom: true },
];

export const INITIAL_GRAPHICS_LEVEL = 2;
export type FrameReading = { mean: number; p95: number };

/** Only active-motion windows reach this controller. Failed upgrades stay capped for this visit. */
export function createAdaptiveQuality() {
  let level = INITIAL_GRAPHICS_LEVEL;
  let ceiling = GRAPHICS_LEVELS.length - 1;
  let healthy = 0;
  let slow = 0;
  return {
    resetSamples() { healthy = 0; slow = 0; },
    observe({ mean, p95 }: FrameReading): number | null {
      if (!Number.isFinite(mean) || !Number.isFinite(p95) || mean <= 0 || p95 <= 0) return null;
      const struggling = mean > 22 || p95 > 35;
      const headroom = mean < 17.5 && p95 < 20;
      healthy = headroom ? healthy + 1 : 0;
      slow = struggling ? slow + 1 : 0;
      if (level > 0 && (slow >= 2 || mean > 32)) {
        level--;
        ceiling = level;
      } else if (healthy >= 3 && level < ceiling) {
        level++;
      } else return null;
      healthy = 0;
      slow = 0;
      return level;
    },
  };
}
