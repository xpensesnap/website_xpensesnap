"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import React, { useRef } from "react";

type Feature = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  visualSrc?: string;
  visualComponent?: React.ReactNode;
};

const features: Feature[] = [
  {
    id: "ocr",
    title: "OCR that just works",
    description:
      "Photograph a receipt or upload a PDF and watch every line item appear in seconds. Merchant, total, tax, date, individual items — all extracted automatically. Edit anything in two taps.",
    bullets: [
      "Paper, digital, PDF",
      "GST-aware extraction",
      "Line-item detection",
      "Sub-second response on Vault",
    ],
    visualSrc: "/ocr.webp",
  },
  {
    id: "splits",
    title: "Splits that settle themselves",
    description:
      "Whether it's a dinner for two or a goa trip for ten, XpenseSnap tracks who paid, who owes, and who owes whom. Auto-settlement uses the fewest possible transactions to make everyone even.",
    bullets: [
      "1-on-1 and group splits",
      "Smart equal/percent/exact split",
      "Auto-settlement graph",
      "Invite via link, no signup required",
    ],
    visualSrc: "/splits.webp",
  },
  {
    id: "budgets",
    title: "Budgets with personality",
    description:
      "Cap your monthly food spend, watch your travel grow, set hard limits on impulse buys. Visual progress, gentle nudges, no shame — just clarity.",
    bullets: [
      "Per-category limits",
      "Soft & hard caps",
      "Rollover support",
      "Weekly summary email",
    ],
    visualSrc: "/bwp.webp",
  },
  {
    id: "subscriptions",
    title: "Every subscription, one screen",
    description:
      "Hidden renewal? Not anymore. We pull every recurring charge into a single view so you know exactly what hits your card and when.",
    bullets: [
      "Auto-detect from receipts",
      "Renewal reminders",
      "Cancel-list one-tap",
      "Annual total at a glance",
    ],
    visualSrc: "/subs.webp",
  },
  {
    id: "reimbursement",
    title: "Reimbursement, finally simple",
    description:
      "Tag work expenses as you go, then export a beautifully formatted PDF report when it's time to claim. HR will love you.",
    bullets: [
      "One-tap reimbursable toggle",
      "Per-project tagging",
      "CSV + PDF export",
      "Approval-ready formatting",
    ],
    visualSrc: "/r.webp",
  },
  {
    id: "privacy",
    title: "Privacy that means it",
    description:
      "Encrypted at rest, encrypted in transit, never sold. We make money from subscriptions, not your spending data — and that's a promise we put in writing.",
    bullets: [
      "AES-256 at rest",
      "TLS 1.3 in transit",
      "Zero ad-tech",
      "Full data export anytime",
    ],
    visualSrc: "/privicy.webp",
  },
];

export function DeepFeatures() {
  return (
    <section className="bg-ink-50 dark:bg-[#050505] transition-colors duration-300 py-16 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col space-y-24 lg:space-y-48">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 1; // Alternate layout
            
            return (
              <div 
                key={feature.id} 
                className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
              >
                
                {/* Text Block */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="text-3xl lg:text-5xl font-display font-bold text-ink-950 dark:text-white mb-6 tracking-tight leading-[1.1]">
                    {feature.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-ink-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                  <ul className="space-y-5">
                    {feature.bullets.map((bullet: string) => (
                      <li key={bullet} className="flex items-center gap-4 text-ink-700 dark:text-neutral-300">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-[#161616] border border-ink-300 dark:border-[#333] flex items-center justify-center shadow-sm">
                          <Check className="w-3.5 h-3.5 text-ink-950 dark:text-white" />
                        </div>
                        <span className="text-lg font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Parallax Image Block (Floating Window with 3D Tilt) */}
                <div className={`w-full lg:w-1/2 relative flex items-center justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                   {/* Decorative glow behind the rounded window */}
                   <div className="absolute inset-0 bg-gradient-radial from-brand-500/20 dark:from-white/5 to-transparent blur-3xl opacity-50" />
                   
                   {/* 3D Tilt Wrapper */}
                   <TiltWindow>
                     <ParallaxBackground src={feature.visualSrc} component={feature.visualComponent} />
                   </TiltWindow>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Renders a true parallax background image that moves slightly vertically
 * as the user scrolls past the container.
 */
function ParallaxBackground({ src, component }: { src?: string, component?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress (0 to 1) to a Y translation (-20% to 20%)
  const yOffset = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
       {/* We make the image container slightly taller than 100% so we can pan it up and down without seeing edges */}
       <motion.div 
         style={{ y: yOffset }} 
         className="absolute inset-x-0 -top-[20%] -bottom-[20%] w-full"
       >
          {src ? (
             <img 
               src={src} 
               alt="" 
               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
             />
          ) : (
             <div className="w-full h-full flex flex-col items-center justify-center bg-ink-950 dark:bg-[#050505]">
                <div className="scale-125">
                  {component}
                </div>
             </div>
          )}
       </motion.div>
    </div>
  );
}

/**
 * Wraps content in a 3D perspective container that tilts based on cursor position.
 */
function TiltWindow({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out the raw mouse values
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  // Map normalized coordinates (-0.5 to 0.5) to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <div style={{ perspective: "1500px" }} className="w-full relative z-10">
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          const width = rect.width;
          const height = rect.height;
          // Calculate relative mouse position (0 to 1)
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          // Normalize to -0.5 to 0.5
          x.set(mouseX / width - 0.5);
          y.set(mouseY / height - 0.5);
        }}
        onMouseLeave={() => {
          // Snap back to 0 on leave
          x.set(0);
          y.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[4/3] lg:aspect-square"
      >
        {/* Inner container translated forward in Z space for 3D depth pop */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-ink-200 dark:border-[#222] bg-white dark:bg-[#0a0a0a]"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* --- Leftover Mockups --- */

function MockupReimbursement() {
  return (
    <div className="bg-white dark:bg-[#161616] rounded-2xl border border-ink-200 dark:border-[#262626] p-6 shadow-2xl w-full max-w-sm">
      <div className="flex justify-between items-center mb-6 border-b border-ink-200 dark:border-[#222] pb-4">
        <div>
          <div className="text-xs font-mono text-ink-500 dark:text-neutral-500 uppercase tracking-widest">Expense Report</div>
          <div className="text-2xl font-bold text-ink-950 dark:text-white mt-1">₹12,840</div>
        </div>
        <div className="px-2 py-1 bg-ink-200 dark:bg-neutral-800 text-ink-700 dark:text-neutral-300 text-[10px] uppercase font-bold rounded">
          Draft
        </div>
      </div>
      <div className="space-y-3 mb-6">
        {["Cab to airport", "Hotel — Mumbai", "Client dinner", "Conference fees"].map(item => (
          <div key={item} className="flex items-center gap-3">
            <Check className="w-3 h-3 text-ink-500 dark:text-neutral-500" />
            <span className="text-sm text-ink-700 dark:text-neutral-300">{item}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-3 rounded-xl bg-ink-950 dark:bg-white text-white dark:text-black font-bold text-sm hover:bg-ink-800 dark:hover:bg-neutral-200 transition-colors">
        Export PDF
      </button>
    </div>
  );
}

export default DeepFeatures;
