// src/hooks/useImageCardHeight.js

const useImageCardHeight = () => {
  const getImageHeight = (cardClass, index) => {
    if (cardClass.includes("__01")) {
      return index % 2 === 0
        ? "lg:max-h-[387px] max-h-[193px]"
        : "lg:h-[387px] h-[193px]";
    }
    if (cardClass.includes("__02")) {
      return index % 2 === 0
        ? "lg:h-[432px] h-[216px]"
        : "lg:h-[407px] h-[203px]";
    }
    if (cardClass.includes("__03")) {
      return "lg:h-[342px] h-[180px]";
    }
    if (cardClass.includes("__04")) {
      return "lg:h-[387px] h-[193px]";
    }
    return "lg:h-[387px] h-[193px]";
  };

  return { getImageHeight };
};

export default useImageCardHeight;
