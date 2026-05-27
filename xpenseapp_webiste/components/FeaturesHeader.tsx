"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function FeaturesHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const size = useSpring(0, { stiffness: 300, damping: 30 });
  size.set(isHovered ? 300 : 0);

  const clipPath = useMotionTemplate`circle(${size}px at ${mouseX}px ${mouseY}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="pt-40 pb-16 px-6 sm:px-16 lg:px-24 xl:px-32 max-w-5xl">
      <div 
        className="relative cursor-default py-8 -my-8 w-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* BASE TEXT */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-ink-950 dark:text-neutral-500 leading-[1.05]">
          Everything you need.<br/>
          <span className="text-brand-600 dark:text-neutral-600">Nothing you don't.</span>
        </h1>

        {/* MASKED TEXT (Top Layer) */}
        <motion.div 
          className="absolute inset-y-0 -left-8 -right-8 px-8 py-8 flex items-center bg-[#F04D37] pointer-events-none"
          style={{ clipPath }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white dark:text-[#050505] leading-[1.05]">
            Everything you need.<br/>
            <span className="text-white dark:text-[#050505]">Nothing you don't.</span>
          </h1>
        </motion.div>
      </div>
      
      <p className="mt-8 text-xl sm:text-2xl text-ink-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
        From best-in-class OCR to seamless split settlements, explore the features that make XpenseSnap the fastest way to keep tabs on your money.
      </p>
    </div>
  );
}
