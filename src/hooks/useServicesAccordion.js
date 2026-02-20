// hooks/useServicesAccordion.js
import { useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const useServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left + 150;
    const y = e.clientY - rect.top - 80;
    mouseX.set(x);
    mouseY.set(y);
  };

  return {
    openIndex,
    setHoveredIndex,
    hoveredIndex,
    toggleAccordion,
    handleMouseMove,
    springX,
    springY,
  };
};

export default useServicesAccordion;
