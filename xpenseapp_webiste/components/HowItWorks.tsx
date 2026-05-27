"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    name: "Snap",
    description: "Point your camera at a receipt. Our AI extracts the merchant, items, and taxes in milliseconds.",
  },
  {
    id: "02",
    name: "Review",
    description: "We categorize the expense automatically. You can assign it to a project, add tags, or split it with friends.",
  },
  {
    id: "03",
    name: "Relax",
    description: "Your budgets update instantly. View beautiful charts and get notified if you're approaching your limits.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32 border-t border-[#1a1a1a]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl lg:text-center mb-16 sm:mb-24">
          <h2 className="text-base font-semibold leading-7 text-[#5A32FA] uppercase tracking-widest">How it works</h2>
          <p className="mt-2 text-3xl font-display font-extrabold tracking-tight text-white sm:text-5xl">
            From paper to pixels in 3 steps
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center p-8 bg-[#161616] rounded-3xl border border-[#262626]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#050505] border border-[#333] mb-6">
                  <span className="font-mono text-xl font-bold text-white">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-[2px] bg-gradient-to-r from-[#333] to-transparent -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
