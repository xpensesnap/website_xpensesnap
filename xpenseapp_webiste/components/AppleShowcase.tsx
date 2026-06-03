"use client";

import { useRef, useState } from 'react';
import {
  motion, useScroll, useTransform, useSpring, useMotionValueEvent,
  AnimatePresence,
  type MotionValue,
} from 'framer-motion';
import { 
  ScanLine, Users, PieChart, TrendingUp, 
  Flashlight, Image as ImageIcon, Coffee, 
  ShoppingBag, Car, Utensils, CheckCircle2, Circle 
} from 'lucide-react';

interface Scene {
  key: string;
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  tilt: number;
  ambient: string;
  sectionBg: string;
}

const SCENES: Scene[] = [
  {
    key: 'scan',
    eyebrow: '01 — SNAP',
    title: 'Photograph it.\nWe handle the rest.',
    body: 'Point your camera at any receipt. Our OCR turns paper into structured data — merchant, line items, GST, total — in about a second.',
    icon: ScanLine,
    accent: 'from-sky-500 to-blue-700',
    tilt: -6,
    ambient: 'from-sky-400/30 via-blue-500/20 to-transparent',
    sectionBg: 'bg-sky-100/40 dark:bg-sky-950/30',
  },
  {
    key: 'split',
    eyebrow: '02 — SPLIT',
    title: 'Settle the dinner debt.\nIn one tap.',
    body: 'Add who was there. We find the minimum set of transfers. Send the link, settle in app. Nobody pulls out a calculator at the table.',
    icon: Users,
    accent: 'from-rose-500 to-pink-700',
    tilt: 6,
    ambient: 'from-rose-400/30 via-pink-500/20 to-transparent',
    sectionBg: 'bg-rose-100/40 dark:bg-rose-950/30',
  },
  {
    key: 'budget',
    eyebrow: '03 — BUDGET',
    title: 'Caps that nudge.\nNever nag.',
    body: 'Set monthly limits per category. Gentle warnings as you approach them, never shame. Visual progress, weekly summaries.',
    icon: PieChart,
    accent: 'from-emerald-500 to-green-700',
    tilt: -4,
    ambient: 'from-emerald-400/30 via-green-500/20 to-transparent',
    sectionBg: 'bg-emerald-100/40 dark:bg-emerald-950/30',
  },
  {
    key: 'insights',
    eyebrow: '04 — SEE',
    title: 'Where your money\nactually went.',
    body: 'Beautiful, honest analytics. Drill into a category, a merchant, a month. Find the ₹3,400 coffee habit. Decide what to do.',
    icon: TrendingUp,
    accent: 'from-violet-500 to-purple-700',
    tilt: 4,
    ambient: 'from-violet-400/30 via-purple-500/20 to-transparent',
    sectionBg: 'bg-violet-100/40 dark:bg-violet-950/30',
  },
];

export function AppleShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const t = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  const scale = useTransform(t, [0, 0.18, 0.85, 1], [0.42, 1.0, 1.0, 1.08]);
  const y = useTransform(t, [0, 0.18, 0.85, 1], [180, 0, 0, -80]);
  const rotateZ = useTransform(t, [0, 0.18], [-14, 0]);
  const opacity = useTransform(t, [0, 0.05, 0.95, 1], [0, 1, 1, 0.6]);

  const tiltStops = SCENES.map((s) => s.tilt);
  const tiltKeys = SCENES.map((_, i) => 0.18 + (i / (SCENES.length - 1)) * (0.85 - 0.18));
  const rotateY = useTransform(t, tiltKeys, tiltStops);

  const [active, setActive] = useState(0);
  useMotionValueEvent(t, 'change', (v) => {
    const start = 0.18, end = 0.95;
    const local = Math.max(0, Math.min(1, (v - start) / (end - start)));
    const idx = Math.min(SCENES.length - 1, Math.floor(local * SCENES.length));
    if (idx !== active) setActive(idx);
  });

  const scene = SCENES[active];

  return (
    <section
      ref={containerRef}
      className="relative bg-ink-50 dark:bg-[#050505] transition-colors duration-300"
      style={{ height: `${SCENES.length * 130 + 60}vh` }}
    >
      <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full overflow-hidden flex items-center">
        {/* Full Section Tint */}
        <AnimatePresence>
          <motion.div
            key={scene.key + '-bg'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className={`absolute inset-0 ${scene.sectionBg} pointer-events-none -z-10`}
          />
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={scene.key + '-amb'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className={`absolute inset-0 bg-gradient-radial ${scene.ambient} pointer-events-none`}
            style={{
              backgroundImage: `radial-gradient(ellipse at 60% 50%, var(--tw-gradient-stops))`,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 grid-bg opacity-50 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_75%)] pointer-events-none" />

        <div className="relative container-x w-full flex flex-col lg:grid lg:grid-cols-[1.05fr_1fr] gap-4 sm:gap-10 items-center justify-center h-full py-6 lg:py-0">
          {/* Left column: scene text */}
          <div className="order-2 lg:order-1 w-full z-20">
            <SceneIndicator active={active} total={SCENES.length} progress={t} />

            <AnimatePresence mode="wait">
              <motion.div
                key={scene.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="mt-4" />
                <div className={`inline-flex w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${scene.accent} items-center justify-center shadow-xl`}>
                  <scene.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="mt-3 sm:mt-5 font-mono text-[10px] sm:text-xs tracking-[0.3em] text-brand-600 dark:text-brand-400">
                  {scene.eyebrow}
                </div>
                <h2 className="mt-2 sm:mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-950 dark:text-white leading-[1.05] sm:leading-[1.02] whitespace-pre-line">
                  {scene.title}
                </h2>
                <p className="mt-3 sm:mt-6 text-sm sm:text-lg text-ink-600 dark:text-neutral-400 leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
                  {scene.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right column: pinned phone with 3D scroll transforms */}
          <div className="order-1 lg:order-2 flex justify-center w-full mt-4 lg:mt-0" style={{ perspective: 1400 }}>
            <motion.div
              style={{
                scale,
                y,
                rotateZ,
                rotateY,
                opacity,
                transformStyle: 'preserve-3d',
              }}
              className="relative will-change-transform"
            >
              <PhoneFrame scene={scene} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneIndicator({ active, total, progress }: { active: number; total: number; progress: MotionValue<number> }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-ink-500 dark:text-neutral-500 tabular-nums">
        {String(active + 1).padStart(2, '0')}
        <span className="text-ink-400 dark:text-neutral-700"> / {String(total).padStart(2, '0')}</span>
      </span>
      <div className="flex-1 max-w-[180px] h-px bg-ink-200 dark:bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-500 to-brand-600"
          style={{ width: useTransform(progress, [0, 1], ['0%', '100%']) }}
        />
      </div>
    </div>
  );
}

function PhoneFrame({ scene }: { scene: Scene }) {
  return (
    <div className="relative w-[230px] sm:w-[340px] aspect-[9/19] rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-b from-ink-800 to-ink-950 p-2 sm:p-2.5 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] sm:shadow-[0_30px_120px_-30px_rgba(0,0,0,0.6)] border border-ink-800">
      <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] pointer-events-none">
        <div className="absolute top-0 left-1/4 right-1/4 h-12 bg-gradient-to-b from-white/10 to-transparent rounded-b-full" />
      </div>

      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-ink-950 rounded-full z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-ink-700 mr-3" />
        <div className="w-12 h-1.5 rounded-full bg-ink-800" />
      </div>

      <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-sky-50 dark:from-ink-900 dark:via-ink-950 dark:to-ink-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.key}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute inset-0"
          >
            {scene.key === 'scan'     && <ScreenScan />}
            {scene.key === 'split'    && <ScreenSplit />}
            {scene.key === 'budget'   && <ScreenBudget />}
            {scene.key === 'insights' && <ScreenInsights />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function StatusBar({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const c = tone === 'dark' ? 'text-ink-700 dark:text-ink-300' : 'text-white/90';
  return (
    <div className={`absolute top-9 inset-x-0 px-6 flex items-center justify-between text-[10px] font-semibold ${c} z-50`}>
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="inline-block w-3 h-1.5 rounded-sm bg-current opacity-80" />
        <span className="inline-block w-3 h-1.5 rounded-sm bg-current opacity-80" />
        <span className="inline-block w-5 h-2 rounded-sm border border-current" />
      </span>
    </div>
  );
}

function ScreenScan() {
  return (
    <div className="absolute inset-0 bg-ink-900 overflow-hidden">
      {/* Fake blurred camera background */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900 via-transparent to-transparent" />
      <StatusBar tone="light" />
      
      {/* Viewfinder corners */}
      <div className="absolute inset-x-4 top-24 bottom-32 border-2 border-white/10 rounded-3xl" />
      <div className="absolute inset-x-4 top-24 bottom-32 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-500 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-500 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-500 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-500 rounded-br-3xl" />
      </div>

      <div className="absolute inset-x-0 top-12 px-5 z-10">
        <div className="flex justify-between items-center text-white/80 mt-2">
          <Flashlight className="w-5 h-5" />
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 px-3 py-1 rounded-full backdrop-blur-md text-brand-400">Scanning</div>
          <ImageIcon className="w-5 h-5" />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="relative mt-12 mx-auto w-[92%] bg-[#f8f9fa] dark:bg-[#161616] rounded-t-xl rounded-b-sm shadow-2xl p-5 font-mono text-[10px] text-ink-900 dark:text-white"
        >
          {/* Jagged receipt bottom edge */}
          <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgoJPHBvbHlnb24gZmlsbD0iI2Y4ZjlmYSIgcG9pbnRzPSIwLDAgOCwwIDQsOCIvPgo8L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgoJPHBvbHlnb24gZmlsbD0iIzE2MTYxNiIgcG9pbnRzPSIwLDAgOCwwIDQsOCIvPgo8L3N2Zz4=')] bg-repeat-x" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 rounded-full flex items-center justify-center shrink-0">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm leading-none">STARBUCKS</div>
              <div className="text-[9px] text-ink-500 mt-1">MG Road · 22 Jan 2026</div>
            </div>
          </div>

          <div className="mt-4 border-t border-dashed border-ink-300 dark:border-ink-700 pt-3 space-y-2">
            {[['Cappuccino × 2', '320.00'], ['Almond croissant', '120.00'], ['GST 18%', '79.20']].map(([k, v], i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex justify-between"
              >
                <span className="text-ink-600 dark:text-ink-400">{k}</span>
                <span className="font-medium">₹{v}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-3 pt-3 border-t-2 border-ink-900 dark:border-white flex justify-between font-extrabold text-sm"
          >
            <span>TOTAL</span><span>₹519.20</span>
          </motion.div>

          <motion.div
            initial={{ top: 0, opacity: 1 }}
            animate={{ top: '100%', opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-brand-500/30 to-transparent pointer-events-none"
          />
        </motion.div>
      </div>
      
      {/* Camera shutter bottom bar */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center items-center gap-8 z-10">
        <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center">
           <div className="w-6 h-6 rounded-md bg-white/20 border border-white/30" />
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center backdrop-blur-md bg-black/20">
          <div className="w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </div>
        <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/80">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        </div>
      </div>
    </div>
  );
}

function ScreenSplit() {
  const people = [
    { name: 'Aman', color: 'from-rose-400 to-rose-600', icon: 'A', status: 'paid' },
    { name: 'Vik',  color: 'from-sky-400 to-sky-600',  icon: 'V', status: 'pending' },
    { name: 'Sara', color: 'from-emerald-400 to-emerald-600', icon: 'S', status: 'paid' },
    { name: 'Riya', color: 'from-violet-400 to-violet-600', icon: 'R', status: 'pending' },
  ];
  return (
    <div className="absolute inset-0 bg-[#F9FAFB] dark:bg-[#0A0A0A]">
      <StatusBar tone="dark" />
      
      {/* Header Card */}
      <div className="bg-white dark:bg-[#111] pt-16 pb-6 px-5 rounded-b-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-none border-b border-ink-100 dark:border-ink-800 relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center shrink-0">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-ink-400">Toit, Indiranagar</div>
            <div className="text-sm font-bold text-ink-950 dark:text-white">Dinner & Drinks</div>
          </div>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] font-medium text-ink-500 mb-1">Total Bill</div>
            <span className="text-3xl font-extrabold text-ink-950 dark:text-white tracking-tight">₹1,680</span>
          </div>
          <div className="flex -space-x-2">
            {people.map((p,i) => (
              <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${p.color} border-2 border-white dark:border-[#111] shadow-sm z-${10-i} flex items-center justify-center text-[10px] font-bold text-white`}>
                {p.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* List */}
      <div className="px-5 mt-5 space-y-2.5">
        <div className="flex justify-between items-center mb-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-ink-400 ml-1">Split 4 ways</div>
          <div className="text-[10px] font-bold text-brand-500">Edit</div>
        </div>
        
        {people.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-[#161616] shadow-sm border border-transparent dark:border-ink-800"
          >
            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${p.color} text-white text-xs font-bold flex items-center justify-center shadow-inner`}>
              {p.icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-ink-950 dark:text-white">{p.name}</div>
              <div className="text-[10px] text-ink-500 mt-0.5">{p.status === 'paid' ? 'Settled via UPI' : 'Owes you'}</div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-sm font-bold text-ink-950 dark:text-white">₹420</span>
              {p.status === 'paid' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <Circle className="w-4 h-4 text-ink-300 dark:text-ink-700" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sticky Bottom Action */}
      <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#F9FAFB] via-[#F9FAFB] dark:from-[#0A0A0A] dark:via-[#0A0A0A] to-transparent pt-12 z-20">
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full py-4 rounded-2xl bg-ink-950 dark:bg-white text-white dark:text-ink-950 text-xs font-bold shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          Send Reminders (2)
        </motion.button>
      </div>
    </div>
  );
}

function ScreenBudget() {
  const cats = [
    { name: 'Food & Dining',  pct: 68, spent: '₹8,400', limit: '₹12k', color: '#22C55E', icon: Utensils, bg: 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400' },
    { name: 'Transport',      pct: 42, spent: '₹2,100', limit: '₹5k',  color: '#0EA5E9', icon: Car, bg: 'bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400' },
    { name: 'Shopping',       pct: 91, spent: '₹7,280', limit: '₹8k',  color: '#F59E0B', icon: ShoppingBag, bg: 'bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400' },
    { name: 'Coffee',         pct: 98, spent: '₹1,960', limit: '₹2k',  color: '#EF4444', icon: Coffee, bg: 'bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400' },
  ];
  return (
    <div className="absolute inset-0 bg-ink-50 dark:bg-[#0A0A0A]">
      <StatusBar />
      <div className="absolute inset-x-0 top-16 px-5">
        <div className="flex justify-between items-end mb-8 bg-white dark:bg-[#161616] p-5 rounded-3xl shadow-sm border border-transparent dark:border-ink-800">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-ink-400 mb-1">Total Budget</div>
            <div className="text-3xl font-extrabold text-ink-950 dark:text-white tracking-tight">₹19,740</div>
            <div className="text-[10px] font-bold text-ink-500 mt-1">of ₹27,000 / month</div>
          </div>
          {/* Circular mini chart */}
          <div className="w-14 h-14 rounded-full border-[5px] border-brand-50 dark:border-brand-950/30 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="28" cy="28" r="23" fill="none" stroke="#F04D37" strokeWidth="5" strokeDasharray="144.5" strokeDashoffset="39" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-black text-ink-950 dark:text-white">73%</span>
          </div>
        </div>

        <div className="space-y-3.5">
          {cats.map((c, i) => {
            const over = c.pct >= 95;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="bg-white dark:bg-[#161616] border border-transparent dark:border-ink-800 rounded-2xl p-4 shadow-sm relative overflow-hidden"
              >
                {over && <div className="absolute top-0 right-0 w-16 h-16 bg-rose-500/10 dark:bg-rose-500/5 rounded-bl-full pointer-events-none" />}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.bg}`}>
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-ink-950 dark:text-white">{c.name}</div>
                    <div className="text-[10px] font-medium text-ink-500 mt-0.5">{c.spent} <span className="text-ink-300 mx-1">/</span> {c.limit}</div>
                  </div>
                  <div className={`text-sm font-black ${over ? 'text-rose-500' : 'text-ink-950 dark:text-white'}`}>
                    {c.pct}%
                  </div>
                </div>
                
                <div className="h-2.5 rounded-full bg-ink-100 dark:bg-[#111] overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: over ? '#EF4444' : c.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${c.pct}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8, type: 'spring' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ScreenInsights() {
  const segs = [
    { name: 'Food', c: '#22C55E', dash: 35, icon: Utensils },
    { name: 'Transport', c: '#0EA5E9', dash: 25, icon: Car },
    { name: 'Shopping', c: '#F59E0B', dash: 18, icon: ShoppingBag },
    { name: 'Coffee', c: '#A855F7', dash: 12, icon: Coffee },
  ];
  return (
    <div className="absolute inset-0 bg-[#F9FAFB] dark:bg-[#0A0A0A]">
      <StatusBar />
      <div className="absolute inset-x-0 top-14 px-5">
        <div className="flex justify-between items-center mb-6 bg-ink-200/50 dark:bg-ink-800/50 p-1 rounded-xl">
          <div className="flex-1 text-center py-1.5 bg-white dark:bg-[#161616] rounded-lg shadow-sm text-[10px] font-bold">Month</div>
          <div className="flex-1 text-center py-1.5 text-[10px] font-bold text-ink-500">Week</div>
          <div className="flex-1 text-center py-1.5 text-[10px] font-bold text-ink-500">Year</div>
        </div>

        <div className="bg-white dark:bg-[#161616] rounded-[2rem] p-6 shadow-sm border border-transparent dark:border-ink-800">
          <div className="text-center mb-8">
            <div className="text-[10px] font-bold uppercase tracking-widest text-ink-400 mb-2">Spent in January</div>
            <div className="text-4xl font-extrabold text-ink-950 dark:text-white tracking-tight">₹42.1k</div>
            <div className="text-[10px] font-bold text-emerald-500 mt-2 flex items-center justify-center gap-1 bg-emerald-50 dark:bg-emerald-950/30 w-fit mx-auto px-2.5 py-1 rounded-full">
              <TrendingUp className="w-3 h-3" />
              12% less than Dec
            </div>
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <svg viewBox="0 0 120 120" className="w-40 h-40 -rotate-90 filter drop-shadow-lg">
                {segs.reduce<{ paths: React.ReactNode[]; offset: number }>((acc, s, i) => {
                  const r = 45, C = 2 * Math.PI * r;
                  const len = (s.dash / 100) * C;
                  acc.paths.push(
                    <motion.circle
                      key={i}
                      cx="60" cy="60" r={r}
                      fill="none"
                      stroke={s.c}
                      strokeWidth="22"
                      strokeLinecap="butt"
                      initial={{ strokeDasharray: `0 ${C}`, strokeDashoffset: 0 }}
                      animate={{
                        strokeDasharray: `${len - 1} ${C}`,
                        strokeDashoffset: -acc.offset,
                      }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.8, type: 'spring' }}
                    />,
                  );
                  acc.offset += len;
                  return acc;
                }, { paths: [], offset: 0 }).paths}
                <circle cx="60" cy="60" r="34" fill="white" className="dark:fill-[#161616]" />
              </svg>
            </div>
          </div>

          <div className="space-y-3">
            {segs.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.c}15`, color: s.c }}>
                  <s.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 text-xs font-bold text-ink-950 dark:text-white">{s.name}</div>
                <div className="text-xs font-bold text-ink-500">{s.dash}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppleShowcase;
