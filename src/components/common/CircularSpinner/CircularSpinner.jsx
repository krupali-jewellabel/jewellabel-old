import Image from "next/image";

const CircularSpinner = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
    <div className="relative w-[120px] h-[120px] sm:w-[148px] sm:h-[148px]">
      <img
        src="/images/grow-together-text.png"
        alt="circular-text"
        className="object-contain spin-slow"
      />
      <a
        target="_self"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        flex items-center justify-center w-[60px] h-[60px] sm:w-[73px] sm:h-[73px]
        bg-[#F55733] text-white rounded-full border border-[#F55733] shadow-md"
      >
        <img
          alt="down-arrow"
          src="/icons/arrows/down-arrow.svg"
          className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
        />
      </a>
    </div>
  </div>
  );
};

export default CircularSpinner;
