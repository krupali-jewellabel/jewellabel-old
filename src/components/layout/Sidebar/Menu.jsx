import React from "react";
import { MENUS } from "@/constants/dummyData";
import Image from "next/image";
import { motion } from "framer-motion";
import Typography from "@/components/common/Typography/Typography";

const navVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 40, transition: { duration: 0.3, ease: "easeIn" } },
};

const Menu = () => {
  return (
    <motion.aside
      initial={{ width: 0 }}
      animate={{ width: 479 }}
      exit={{
        x: "-100%",
        transition: { delay: 0.7, duration: 0.3, ease: "easeInOut" },
      }}
      className="bg-white pt-20 h-screen"
    >
      <motion.nav
        className="flex flex-col"
        variants={navVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {MENUS.map((menu) => (
          <motion.a
            key={menu.label}
            href={menu.url}
            variants={itemVariants}
            className="relative group flex items-center justify-between text-black text-xl font-normal px-12 py-8 border-b border-[#D9D9D9] overflow-hidden"
          >
            {/* Hover background */}
            <motion.div className="absolute inset-0 bg-[#F55733] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0" />

            {/* Label */}
            <Typography className="relative z-10 group-hover:text-white transition-colors duration-300">
              {menu.label}
            </Typography>

            {/* Icon */}
            <div className="relative z-10 ml-4">
              <Image
                alt="icon"
                src="/icons/arrows/cross.svg"
                width={16}
                height={16}
              />
            </div>
          </motion.a>
        ))}
      </motion.nav>
    </motion.aside>
  );
};

export default Menu;
