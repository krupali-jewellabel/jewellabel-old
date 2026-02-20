import React from "react";

const Button = ({ title, type, onClick }) => {
  return (
    <>
      {type === "navigation" ? (
        <button
          onClick={onClick}
          className="p-[22px] rounded-[28px] bg-[#272727] text-[#FFFFFF] cursor-pointer"
        >
          <img
            src="/icons/arrows/cross.svg"
            className="w-[11px] h-[11px]"
            alt="icon"
          />
        </button>
      ) : (
        <button
          onClick={onClick}
          className="px-[22px] py-[18px] bg-[#272727] rounded-[40px] text-[#FFFFFF] lg:text-[16px] md:text-[12px] leading-[120%] font-[700]"
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
