import React from "react";
import { motion } from "framer-motion";

const BrandCardBlock = ({
  isImageFirst = false,
  image,
  alt,
  title,
  description,
  variant,
  custom,
  show = true,
}) => {
  const variants = {
    initial: {
      opacity: 1,
      x: variant === "left" ? "100%" : "-100%",
      y: 0,
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: "0%",
      y: 0,
      transition: {
        duration: 2,
        delay: custom?.delay || 0,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {EMPOWERING_BRANDS.map((item, index) => {
        const isFirstOrLast = index === 0 || index === 3;
        const delay = 0.2 + index * 0.2;

        const variants = {
          initial: { opacity: 0, x: index === 0 ? "100%" : "-100%" },
          animate: {
            opacity: 1,
            x: "0%",
            transition: {
              duration: 1.5,
              delay: delay,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          },
        };

        return (
          <motion.div
            key={index}
            variants={isFirstOrLast ? variants : undefined}
            initial="initial"
            animate={
              isFirstOrLast
                ? isAnimating
                  ? "animate"
                  : "initial"
                : showAdditional
                ? "animate"
                : "initial"
            }
            transition={{
              duration: 1.5,
              delay: delay,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className={`w-full col-start-${index + 1}`}
            style={{ zIndex: isFirstOrLast ? 10 : "auto" }}
          >
            <div className="flex flex-col gap-3">
              {index % 2 === 0 ? (
                <>
                  <div className="2xl:h-[440px] md:h-[340px] h-[207px] px-8 py-7 bg-gray-50 rounded-[20px] flex flex-col justify-between">
                    <div className="text-neutral-800 text-lg font-semibold font-['Archivo']">
                      {item.title}
                    </div>
                    <div className="text-neutral-500 text-sm font-medium font-['Archivo'] leading-none">
                      {item.description}
                    </div>
                  </div>
                  <img
                    className="w-full 2xl:h-[440px] md:h-[340px] h-[207px] rounded-[20px] object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </>
              ) : (
                <>
                  <img
                    className="w-full 2xl:h-[440px] md:h-[340px] h-[207px] rounded-[20px] object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="2xl:h-[440px] md:h-[340px] h-[207px] px-8 py-7 bg-gray-50 rounded-[20px] flex flex-col justify-between">
                    <div className="text-neutral-800 text-lg font-semibold font-['Archivo']">
                      {item.title}
                    </div>
                    <div className="text-neutral-500 text-sm font-medium font-['Archivo'] leading-none">
                      {item.description}
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
    // <motion.div
    //   variants={variant ? variants : undefined}
    //   initial="initial"
    //   animate={show ? "animate" : "initial"}
    //   className="w-full"
    // >
    //   <div className="flex flex-col gap-3">
    //     {isImageFirst && (
    //       <img
    //         className="w-full 2xl:h-[440px] md:h-[340px] h-[207px] rounded-[20px] object-cover"
    //         src={image}
    //         alt={alt}
    //       />
    //     )}
    //     <div className="2xl:h-[440px] md:h-[340px] h-[207px] px-8 py-7 bg-gray-50 rounded-[20px] flex flex-col justify-between">
    //       <div className="text-neutral-800 text-lg font-semibold font-['Archivo']">
    //         {title}
    //       </div>
    //       <div className="text-neutral-500 text-sm font-medium font-['Archivo'] leading-none">
    //         {description}
    //       </div>
    //     </div>
    //     {!isImageFirst && (
    //       <img
    //         className="w-full 2xl:h-[440px] md:h-[340px] h-[207px] rounded-[20px] object-cover"
    //         src={image}
    //         alt={alt}
    //       />
    //     )}
    //   </div>
    // </motion.div>
  );
};

export default BrandCardBlock;
