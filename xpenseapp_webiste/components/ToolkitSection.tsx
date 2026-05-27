"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ToolkitSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate the cards horizontally
  // The section is tall (e.g., 400vh), so scrollYProgress goes 0 -> 1 slowly
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-ink-50 dark:bg-[#0a0a0a]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-8 sm:px-24 items-center">
          
          {/* Intro Text */}
          <div className="w-[85vw] sm:w-[60vw] lg:w-[40vw] flex-shrink-0 flex flex-col justify-center">
            <h2 className="font-mono text-xs tracking-[0.3em] text-ink-500 uppercase mb-8">
              The toolkit
            </h2>
            <p className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-ink-950 dark:text-white leading-[1.1] mb-6">
              One app. <br />
              Every money moment.
            </p>
            <p className="text-xl text-ink-600 dark:text-neutral-400 max-w-lg leading-relaxed">
              From the receipt in your hand to the chart on your screen — every step designed to disappear, so you can get on with your day.
            </p>
          </div>

          {/* OCR Card */}
          <CardWrapper title="OCR that turns paper into pixels." description="Photograph a receipt. Watch fields populate one by one — merchant, items, GST, total. Edit anything in two taps.">
            <div className="w-full bg-white dark:bg-[#161616] rounded-2xl border border-ink-200 dark:border-[#262626] p-6 font-mono text-sm shadow-sm">
              <div className="flex justify-between border-b border-ink-100 dark:border-[#333] pb-3 mb-3 text-ink-500">
                <span>Receipt</span><span>Merchant</span>
              </div>
              <div className="font-bold text-lg text-ink-900 dark:text-white mb-6">Starbucks · MG Road</div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-ink-500">Date</span>
                  <span className="text-ink-900 dark:text-white">22 Jan 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Subtotal</span>
                  <span className="text-ink-900 dark:text-white">₹440.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">GST 18%</span>
                  <span className="text-ink-900 dark:text-white">₹79.20</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-ink-100 dark:border-[#333] font-bold text-lg">
                  <span className="text-ink-900 dark:text-white">Total</span>
                  <span className="text-ink-900 dark:text-white">₹519.20</span>
                </div>
              </div>
            </div>
          </CardWrapper>

          {/* Split Bill Card */}
          <CardWrapper title="Split a bill in a tap." description="Drop people on the receipt. We do the maths so nobody pulls out their phone calculator at the table.">
            <div className="w-full bg-white dark:bg-[#161616] rounded-2xl border border-ink-200 dark:border-[#262626] p-6 shadow-sm">
              <div className="mb-6">
                <div className="text-sm font-semibold text-ink-500 mb-1">Toit · Indiranagar</div>
                <div className="text-4xl font-extrabold text-ink-900 dark:text-white">₹1,680</div>
              </div>
              
              <div className="text-xs font-mono tracking-widest text-ink-400 mb-4 uppercase">Split 4 Ways</div>
              
              <div className="space-y-3">
                {['A', 'V', 'S', 'R'].map((person) => (
                  <div key={person} className="flex items-center justify-between p-3 rounded-xl bg-ink-50 dark:bg-[#0a0a0a] border border-ink-100 dark:border-[#222]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-ink-200 dark:bg-[#333] flex items-center justify-center font-bold text-ink-900 dark:text-white text-xs">
                        {person}
                      </div>
                    </div>
                    <span className="font-semibold text-ink-900 dark:text-white">₹420</span>
                  </div>
                ))}
              </div>
            </div>
          </CardWrapper>

          {/* Budgets Card */}
          <CardWrapper title="Budgets that nudge." description="Caps per category, no nagging.">
            <div className="w-full bg-white dark:bg-[#161616] rounded-2xl border border-ink-200 dark:border-[#262626] p-6 shadow-sm space-y-6">
              {[
                { name: 'Food', val: 68 },
                { name: 'Transport', val: 42 },
                { name: 'Coffee', val: 95, warn: true },
                { name: 'Shopping', val: 30 },
              ].map((cat) => (
                <div key={cat.name}>
                  <div className="flex justify-between text-sm font-semibold text-ink-900 dark:text-white mb-2">
                    <span>{cat.name}</span>
                    <span className={cat.warn ? "text-red-500" : ""}>{cat.val}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-ink-100 dark:bg-[#222] overflow-hidden">
                    <motion.div 
                      className={`h-full ${cat.warn ? "bg-red-500" : "bg-ink-950 dark:bg-white"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.val}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardWrapper>

          {/* Insights Card */}
          <CardWrapper title="Honest insights." description="Where it all actually goes.">
            <div className="w-full bg-white dark:bg-[#161616] rounded-2xl border border-ink-200 dark:border-[#262626] p-8 shadow-sm flex flex-col items-center justify-center h-full min-h-[300px]">
              <div className="relative aspect-square w-48 rounded-full border-[16px] border-ink-100 dark:border-[#222] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[16px] border-ink-950 dark:border-white [clip-path:polygon(50%_50%,50%_0%,100%_0%,100%_70%,20%_100%)] opacity-80" />
                <div className="text-center">
                  <div className="text-xs font-bold text-ink-500 mb-1">JAN</div>
                  <div className="text-2xl font-extrabold text-ink-900 dark:text-white">₹42k</div>
                </div>
              </div>
            </div>
          </CardWrapper>

          {/* Renewals Card */}
          <CardWrapper title="Every renewal, in one place." description="Never pay for a subscription you forgot about.">
            <div className="w-full bg-white dark:bg-[#161616] rounded-2xl border border-ink-200 dark:border-[#262626] p-6 shadow-sm">
              <div className="space-y-4">
                {[
                  { name: 'Netflix', time: 'Tomorrow', price: '₹649', urgent: true },
                  { name: 'Spotify', time: 'In 3 days', price: '₹119' },
                  { name: 'Notion', time: 'In 8 days', price: '$10' },
                  { name: 'Gym', time: 'In 14 days', price: '₹1,800' },
                ].map((sub) => (
                  <div key={sub.name} className="flex items-center justify-between pb-4 border-b border-ink-100 dark:border-[#262626] last:border-0 last:pb-0">
                    <div>
                      <div className="font-semibold text-ink-900 dark:text-white">{sub.name}</div>
                      <div className={`text-xs ${sub.urgent ? "text-rose-500 font-medium" : "text-ink-500"}`}>{sub.time}</div>
                    </div>
                    <div className="font-bold text-ink-900 dark:text-white">{sub.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardWrapper>

          {/* Trust Badges */}
          <div className="w-[80vw] sm:w-[40vw] flex-shrink-0 flex flex-col gap-6 pl-12 border-l border-ink-200 dark:border-[#333]">
            <Badge title="1.2s" desc="Avg scan time" />
            <Badge title="AES-256" desc="At-rest encryption" />
            <Badge title="Smart" desc="Notifications, never spam" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function CardWrapper({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
  return (
    <div className="w-[85vw] sm:w-[45vw] lg:w-[30vw] h-[60vh] flex-shrink-0 flex flex-col justify-between">
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-ink-950 dark:text-white mb-3">{title}</h3>
        <p className="text-ink-600 dark:text-neutral-400">{description}</p>
      </div>
      <div className="flex-1 flex items-end">
        {children}
      </div>
    </div>
  );
}

function Badge({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-ink-950 dark:text-white">{title}</div>
      <div className="text-sm font-medium text-ink-500 mt-1">{desc}</div>
    </div>
  );
}

export default ToolkitSection;
