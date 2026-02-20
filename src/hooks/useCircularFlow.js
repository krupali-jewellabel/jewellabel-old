import { useState } from "react";

const useCircularFlow = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Define card positions for desktop layout
  const positions = [
    { top: "top-[190px]", left: "left-0" },
    { top: "top-0", left: "left-1/2 -translate-x-1/2" },
    { top: "top-[190px]", left: "right-0" },
    { top: "top-[542px]", left: "right-0" },
    { top: "top-[542px]", left: "left-0" },
    { top: "top-[680px]", left: "left-1/2 -translate-x-1/2" },
  ];

  return {
    hoveredIndex,
    setHoveredIndex,
    positions
  };
};

export default useCircularFlow;
