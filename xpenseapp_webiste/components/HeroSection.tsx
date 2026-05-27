"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { ScanLine, ArrowRight } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Parallax for the background image
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // --- Cursor Mask Effect Logic ---
  const [isHovered, setIsHovered] = useState(false);

  // Use raw mouse values for immediate tracking, but spring for the size
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring for the size of the circle so it grows/shrinks smoothly
  const size = useSpring(0, { stiffness: 300, damping: 30 });
  size.set(isHovered ? 250 : 0);

  // useMotionTemplate to generate the clip-path string
  const clipPath = useMotionTemplate`circle(${size}px at ${mouseX}px ${mouseY}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-ink-50 dark:bg-[#050505]"
    >
      {/* Background Image */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div
          className="absolute inset-0 bg-no-repeat  bg-cover bg-center opacity- dark:opacity-90"
          style={{ backgroundImage: 'url("/front_image2.webp")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-50/90 via-ink-50/50 to-transparent dark:from-[#050505] dark:via-[#050505]/60 dark:to-transparent" />
      </motion.div>

      {/* Content wrapper */}
      <div className="container-x relative z-10 w-full flex flex-col items-start text-left mt-20 lg:mt-0">
        <motion.div
          style={{ opacity: opacityText, y: yText }}
          className="flex flex-col items-start w-full max-w-3xl"
        >
          {/* Interactive Mask Text Area */}
          <div
            className="relative cursor-default py-8 -my-8 w-full"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* BASE TEXT (Bottom Layer) */}
            <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-display font-extrabold tracking-tight text-ink-950 dark:text-neutral-500 leading-[1.05]">
              Snap your receipts. <br />
              We do the math.
            </h1>

            {/* MASKED TEXT (Top Layer) */}
            <motion.div
              className="absolute inset-y-0 -left-8 -right-8 px-8 py-8 flex items-center bg-[#F04D37] pointer-events-none"
              style={{ clipPath }}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-doto font-extrabold tracking-tight text-white dark:text-[#050505] leading-[1.05]">
                Snap your receipts. <br />
                We do the math.
              </h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-ink-600 dark:text-neutral-400 max-w-xl"
          >
            Not a kitchen sink, not a stripped-down toy — XpenseSnap is the
            shortest path from "I just paid for that" to "I know where my money
            went."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-brand-500 dark:bg-white text-white dark:text-black font-bold text-lg hover:bg-brand-600 dark:hover:bg-neutral-200 transition-all w-full sm:w-auto hover:scale-105">
              <ScanLine className="w-5 h-5" />
              Download App
            </button>
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white dark:bg-[#161616] border border-ink-200 dark:border-[#333] text-ink-950 dark:text-white font-bold text-lg hover:bg-ink-50 dark:hover:bg-[#222] transition-all group w-full sm:w-auto">
              See how it works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
