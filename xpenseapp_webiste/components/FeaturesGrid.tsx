"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Banknote, Globe, Zap, DownloadCloud, LineChart } from "lucide-react";

const features = [
  {
    name: "Bank-grade Security",
    description: "Your financial data is encrypted at rest using AES-256. We never sell your data.",
    icon: ShieldCheck,
  },
  {
    name: "Multi-currency Support",
    description: "Travelling? We automatically detect and convert over 150 currencies to your base currency.",
    icon: Globe,
  },
  {
    name: "Smart Categorization",
    description: "Our AI learns your spending habits and categorizes your expenses automatically with 99% accuracy.",
    icon: Zap,
  },
  {
    name: "Split with anyone",
    description: "Send a payment link via UPI, WhatsApp, or iMessage. Settle up instantly.",
    icon: Banknote,
  },
  {
    name: "Export anywhere",
    description: "Download CSVs or PDFs formatted perfectly for your accountant or tax software.",
    icon: DownloadCloud,
  },
  {
    name: "Deep Analytics",
    description: "Compare months, spot trends, and find where your money is really going.",
    icon: LineChart,
  },
];

export function FeaturesGrid() {
  return (
    <section className="bg-[#050505] py-24 sm:py-32 border-t border-[#1a1a1a]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#5A32FA] uppercase tracking-widest">Built for power users</h2>
          <p className="mt-2 text-3xl font-display font-extrabold tracking-tight text-white sm:text-5xl">
            Everything you need to manage your money
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            We've packed XpenseSnap with features that give you total control over your finances, without the clutter.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#161616] border border-[#333]">
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
