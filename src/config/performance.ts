/**
 * Performance Configuration Engine
 * Centralized source of truth for graphics, shaders, scroll physics, and animation budgets.
 * Modifying values here scales performance across desktop and mobile devices without touching components.
 */

export const PERFORMANCE_CONFIG = {
  scroll: {
    /** Desktop smooth-scroll duration in seconds (lower = more responsive, less floaty) */
    desktopDuration: 1.0,
    /** Mobile scroll duration (0 = instant native hardware momentum scroll) */
    mobileDuration: 0,
    /** Whether to apply smooth wheel handling on desktop pointer devices */
    smoothWheelDesktop: true,
    /** Whether to override native touch scrolling on mobile (false = native 120Hz touch scrolling) */
    smoothTouchMobile: false,
    /** Scroll friction / damping factor */
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },
  graphics: {
    /** Milliseconds of inactivity before 3D WebGL renderer enters sleep mode */
    idleSleepMs: 1500,
    /** Mobile DPR ceiling (prevents fill-rate bottlenecks on 3x retina phone screens) */
    mobileMaxDpr: 1.5,
    /** Desktop DPR ceiling for sharp rendering on 4K/high-DPI monitors */
    desktopMaxDpr: 1.85,
    /** Shadow filtering mode on mobile devices (standard PCF avoids heavy PCSS shader loops) */
    mobileShadows: false,
    /** Shadow filtering mode on desktop devices */
    desktopShadows: true,
    /** Soft percentage-closer shadows (true on desktop, false on mobile) */
    softShadowsDesktop: true,
    softShadowsMobile: false,
    /** Post-processing bloom pass */
    enableBloomDesktop: true,
    enableBloomMobile: false,
    /** Ambient occlusion pass */
    enableAoDesktop: true,
    enableAoMobile: false,
  },
  particles: {
    /** Desktop particle quantity (balanced for aesthetics and fill-rate) */
    desktopCount: 40,
    /** Mobile particle quantity (reduced to preserve mobile battery and thermals) */
    mobileCount: 15,
  },
  animations: {
    /** Use GPU compositor thread (transform) rather than CPU paint properties (background-position) */
    useHardwareTransforms: true,
    /** Disable heavy CSS filter: blur() during entrance animations on mobile */
    disableBlurFiltersMobile: true,
  },
} as const;

export type PerformanceConfig = typeof PERFORMANCE_CONFIG;
