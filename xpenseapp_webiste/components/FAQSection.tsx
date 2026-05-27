"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use AES-256 bank-grade encryption to secure your data at rest. We never sell your data to third parties, and our infrastructure is audited regularly for compliance.",
  },
  {
    question: "Does it work with Indian receipts?",
    answer: "Yes, XpenseSnap was built specifically for the Indian market. Our OCR engine is trained to perfectly extract GST numbers, HSN codes, and handle handwritten totals commonly found in Indian bills.",
  },
  {
    question: "Can I export my data to Tally or Zoho?",
    answer: "Yes, on the Pro and Enterprise plans, you can export your structured data in customizable CSV formats that seamlessly import into Tally, Zoho Books, QuickBooks, and Xero.",
  },
  {
    question: "How does bill splitting work?",
    answer: "Just upload a receipt and assign the line items to different people. XpenseSnap calculates taxes proportionally and generates a UPI payment link that you can share on WhatsApp in one tap.",
  },
  {
    question: "What happens if I cross my budget?",
    answer: "We send you a gentle, smart notification. We don't block your spending or nag you. You can choose to adjust your budget cap or temporarily mute warnings for that category.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-ink-50 dark:bg-[#050505] py-24 sm:py-32 border-t border-ink-200 dark:border-[#1a1a1a] transition-colors duration-300">
      <div className="container-x">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-display font-extrabold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-600 dark:text-neutral-400">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <dl className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="bg-white dark:bg-[#111] border border-ink-200 dark:border-[#222] rounded-2xl overflow-hidden transition-colors hover:border-ink-300 dark:hover:border-[#333]">
                  <dt>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left text-ink-950 dark:text-white focus:outline-none"
                    >
                      <span className="font-semibold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDown
                          className={`h-5 w-5 text-ink-500 dark:text-neutral-400 transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </dt>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.dd
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0 text-sm leading-relaxed text-ink-600 dark:text-neutral-400">
                          {faq.answer}
                        </div>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
