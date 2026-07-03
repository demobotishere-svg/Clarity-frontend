"use client";

import React, { useState, useEffect, useRef } from "react";

export default function LazyLoad({ children, height = "600px", threshold = 0.1, rootMargin = "600px" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, just render immediately
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? "auto" : height }}>
      {isVisible ? children : null}
    </div>
  );
}
