import { useState, useEffect, useRef } from "react";

/**
 * Client-side only Lottie player.
 * Loads lottie-web dynamically and renders animation via the `path` (public URL) or `animationData` (JSON object).
 */
const LottiePlayer = ({ path, animationData, loop = true, autoplay = true, style = {}, className = "" }) => {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    const load = async () => {
      const lottieWeb = (await import("lottie-web")).default;

      if (cancelled || !containerRef.current) return;

      if (animRef.current) {
        animRef.current.destroy();
      }

      animRef.current = lottieWeb.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        ...(animationData ? { animationData } : { path }),
      });
    };

    load();

    return () => {
      cancelled = true;
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [path, animationData, loop, autoplay]);

  return <div ref={containerRef} style={style} className={className} />;
};

export default LottiePlayer;
