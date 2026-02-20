'use client'
import { useEffect, useState } from "react";

const useEmpoweringAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAdditional, setShowAdditional] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 1000);
    const additionalTimer = setTimeout(() => setShowAdditional(true), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(additionalTimer);
    };
  }, []);

  const cardVariants = {
    initial: {
      opacity: 1,
      x: "100%",
      y: 0,
      scale: 1,
    },
    animate: (custom) => ({
      opacity: 1,
      scale: 1,
      x: custom.x,
      y: custom.y || 0,
      transition: {
        duration: 2,
        delay: custom.delay,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  const rightCardVariants = {
    initial: {
      opacity: 1,
      x: "-100%",
      y: 0,
      scale: 1,
    },
    animate: (custom) => ({
      opacity: 1,
      scale: 1,
      x: custom.x,
      y: custom.y || 0,
      transition: {
        duration: 2,
        delay: custom.delay,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return {
    isAnimating,
    showAdditional,
    cardVariants,
    rightCardVariants,
  };
};

export default useEmpoweringAnimation;
