"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Apple, Play, QrCode } from "lucide-react";

const CardContent = ({ isMask = false }: { isMask?: boolean }) => {
  return (
    <>
      {/* Content */}
      <div className="w-full lg:w-3/5 text-left z-10">
        <p className={`text-sm sm:text-base font-bold tracking-widest uppercase mb-6 ${isMask ? 'text-brand-400' : 'text-white/90'}`}>
          Live in India · iOS & Android
        </p>
        <h2 className={`text-4xl sm:text-6xl lg:text-7xl ${isMask ? 'font-doto' : 'font-display'} font-extrabold tracking-tight mb-6 leading-[1.05] ${isMask ? 'text-brand-600' : 'text-white'}`}>
          Stop tracking.<br />Start snapping.
        </h2>
        <p className={`text-lg sm:text-xl leading-relaxed font-medium max-w-xl ${isMask ? 'text-ink-600' : 'text-white/90'}`}>
          Download XpenseSnap on your phone — yes, that one in your pocket — and have your first receipt scanned before your chai gets cold.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a href="#" className={`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-xl ${isMask ? 'bg-brand-50 text-brand-900 border border-brand-200' : 'bg-ink-950 hover:bg-black text-white'}`}>
            <Apple className={`w-8 h-8 fill-current ${isMask ? 'text-brand-900' : ''}`} />
            <div className="text-left">
              <div className={`text-[10px] uppercase font-bold tracking-wider ${isMask ? 'text-brand-900/70' : 'text-white/70'}`}>Download on the</div>
              <div className="text-lg font-bold leading-none mt-0.5">App Store</div>
            </div>
          </a>

          <a href="#" className={`flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-xl ${isMask ? 'bg-brand-50 text-brand-900 border border-brand-200' : 'bg-ink-950 hover:bg-black text-white'}`}>
            <Play className={`w-7 h-7 fill-current ${isMask ? 'text-brand-900' : ''}`} />
            <div className="text-left">
              <div className={`text-[10px] uppercase font-bold tracking-wider ${isMask ? 'text-brand-900/70' : 'text-white/70'}`}>Get it on</div>
              <div className="text-lg font-bold leading-none mt-0.5">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      {/* QR Code / Visual */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center z-10 mt-12 lg:mt-0">
        <div className={`rounded-3xl p-8 flex flex-col items-center shadow-2xl ${isMask ? 'bg-brand-50 border border-brand-200' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
          <div className={`p-4 rounded-2xl mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer ${isMask ? 'bg-brand-500 text-white' : 'bg-white text-ink-950'}`}>
            <QrCode className="w-48 h-48" strokeWidth={1} />
          </div>
          <p className={`font-bold tracking-widest uppercase text-sm ${isMask ? 'text-brand-600' : 'text-white'}`}>
            Scan to install
          </p>
        </div>
      </div>
    </>
  );
};

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const size = useSpring(0, { stiffness: 300, damping: 30 });
  size.set(isHovered ? 250 : 0);

  const clipPath = useMotionTemplate`circle(${size}px at ${mouseX}px ${mouseY}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="bg-ink-50 dark:bg-[#050505] py-24 sm:py-32 transition-colors duration-300">
      <div className="container-x">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative isolate overflow-hidden bg-brand-500 rounded-[3rem] shadow-2xl"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* BASE CARD */}
          <div className="px-6 py-20 sm:px-16 sm:py-24 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <CardContent isMask={false} />
          </div>

          {/* MASKED CARD */}
          <motion.div 
            className="absolute inset-0 bg-white pointer-events-none z-20 flex flex-col lg:flex-row items-center justify-between gap-16 px-6 py-20 sm:px-16 sm:py-24 lg:px-24"
            style={{ clipPath }}
          >
            <CardContent isMask={true} />
          </motion.div>

          {/* Abstract Shape Background */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] pointer-events-none"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="300" fill="url(#cta-gradient)" fillOpacity="0.25" />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
