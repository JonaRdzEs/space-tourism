import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  "hover": {
    scale: 1.5,
    type: "spring",
  },
  "not-hover": {
    scale: 0,
    type: "spring",
  },
};

export function ExploreButton() {
  const [isHovering, setHovering] = useState(false);
  return (
    <div className="mt-24 relative w-36 h-36 md:h-60 md:w-60">
      <motion.div
        className="bg-white opacity-[0.13] w-full h-full  rounded-full absolute"
        initial={false}
        variants={variants}
        animate={isHovering ? "hover" : "not-hover"}
      />
      <a
        href="/destinations/moon"
        className="font-serif text-xl flex justify-center items-center bg-white text-space-navy rounded-full absolute  w-full h-full md:text-[32px]"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        Explore
      </a>
    </div>
  );
}
