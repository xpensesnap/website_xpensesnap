"use client";

import { motion } from "framer-motion";

const beliefs = [
  { title: "Respect the user", desc: "No dark patterns. No nagging upsells. We work for you, not the other way around." },
  { title: "Fast over fancy", desc: "A second saved 100 times a month is your weekend back. We obsess over latency." },
  { title: "Your data, your data", desc: "We make money from subscriptions, not your spending. No selling, no sharing, no ad-tech." },
  { title: "Sweat the details", desc: "Every animation, every label, every empty state — designed on purpose." },
];

export function AboutSection() {
  return (
    <section className="bg-ink-50 dark:bg-[#050505] py-24 sm:py-32 border-t border-ink-200 dark:border-[#1a1a1a] transition-colors duration-300">
      <div className="container-x">
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-base font-semibold leading-7 text-brand-600 dark:text-[#5A32FA] uppercase tracking-widest mb-4">About</h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-950 dark:text-white mb-6 tracking-tight leading-[1.1]">
            We built XpenseSnap because we were tired of being nickel-and-dimed by our own money.
          </h2>
          <div className="space-y-6 text-lg text-ink-600 dark:text-neutral-400 leading-relaxed">
            <p>
              In 2024, our founders went on a simple weekend trip to Goa. By the time they got back, figuring out who paid for the cab, the dinner, and the hotel turned into a massive spreadsheet headache. Every app they tried was either bloated with ads, required a premium subscription just to scan a receipt, or sold their financial data to third parties.
            </p>
            <p>
              So they built XpenseSnap. The goal was simple: the fastest possible path from "I paid for this" to "I know exactly where my money is going." No ads. No selling data. Just a lightning-fast interface, best-in-class OCR, and math that does itself.
            </p>
          </div>
        </motion.div>

        {/* Beliefs Grid */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-ink-950 dark:text-white mb-10 border-b border-ink-200 dark:border-[#222] pb-4">What we believe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beliefs.map((belief, idx) => (
              <motion.div 
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="border-l-2 border-ink-200 dark:border-[#333] pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-ink-950 dark:text-white mb-3">{belief.title}</h3>
                <p className="text-ink-600 dark:text-neutral-400">{belief.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-ink-200 dark:border-[#222] pt-16">
          {[
            { stat: "2024", text: "Year one. Bengaluru. Three people, a whiteboard, a problem." },
            { stat: "25k+", text: "People snapping receipts every day across India." },
            { stat: "∞", text: "Number of times we'll choose user trust over a quick win." },
          ].map((item, i) => (
            <motion.div 
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl lg:text-7xl font-display font-extrabold text-ink-950 dark:text-white mb-4">{item.stat}</div>
              <p className="text-ink-600 dark:text-neutral-400 text-sm leading-relaxed max-w-xs">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
