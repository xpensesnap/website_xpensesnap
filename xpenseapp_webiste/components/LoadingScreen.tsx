"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const duration = 2000; 
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      const easedProgress = nextProgress === 100 ? 100 : Math.floor(100 - Math.pow(1 - nextProgress / 100, 3) * 100);
      setProgress(easedProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(onComplete, 800);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-end justify-end p-8 sm:p-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-baseline gap-1"
          >
            <span className="font-mono text-5xl sm:text-7xl font-light tracking-tighter text-black tabular-nums">
              {progress}
            </span>
            <span className="font-mono text-2xl sm:text-3xl font-light text-black">
              %
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
