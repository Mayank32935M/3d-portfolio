"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { PERFORMANCE_CONFIG } from "@/config/performance";

gsap.registerPlugin(ScrollTrigger);

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  // Re-evaluate every ScrollTrigger on each Lenis scroll frame. Otherwise Lenis
  // smooths scrolling on its own loop while ScrollTrigger samples independently,
  // so a fast flick jumps past a trigger's start line unevaluated and its
  // onEnter/onLeaveBack (which drive the keyboard's active-section state) never
  // fire — leaving section animations like the contact keycap "float" stuck.
  const { reducedMotion, isMobile } = usePerfProfile();
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;
    // Drive Lenis from GSAP's ticker with balanced lag smoothing (avoids large jump on dropped frames)
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(500, 33);
    return () => {
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [lenis]);

  const duration = reducedMotion
    ? 0
    : isMobile
    ? PERFORMANCE_CONFIG.scroll.mobileDuration
    : PERFORMANCE_CONFIG.scroll.desktopDuration;

  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        duration,
        easing: PERFORMANCE_CONFIG.scroll.easing,
        smoothWheel: !reducedMotion && !isMobile ? PERFORMANCE_CONFIG.scroll.smoothWheelDesktop : false,
        syncTouch: false,
        prevent: (node) => {
          if (isInsideModal) return true;
          const modalOpen = node.classList.contains("modall");
          return modalOpen;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
