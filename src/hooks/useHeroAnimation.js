// hooks/useHeroAnimations.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const useHeroAnimations = () => {
  const sectionRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const leftContentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(leftDivRef.current, { x: "-100%", duration: 1 }, 0)
      .to(leftContentRef.current, { x: "-100%", duration: 1 }, 0)
      .to(rightDivRef.current, { x: "100%", duration: 1 }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && rightDivRef.current) {
          rightDivRef.current.style.transform = "translateX(0)";
          rightDivRef.current.style.opacity = "1";
        }
      },
      { threshold: 0.5 }
    );

    if (rightDivRef.current) {
      observer.observe(rightDivRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Return all refs to use in component
  return {
    sectionRef,
    leftDivRef,
    rightDivRef,
    leftContentRef,
  };
};

export default useHeroAnimations;
