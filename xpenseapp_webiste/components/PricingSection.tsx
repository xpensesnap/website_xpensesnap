"use client";

import { Check } from "lucide-react";

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    price: "Free",
    period: "",
    description: "For individuals trying out expense tracking for the first time.",
    features: [
      "50 receipts per month",
      "Basic categorisation",
      "Split bills up to 3 people",
      "Standard support",
    ],
    buttonText: "Start for free",
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    price: "₹299",
    period: "/ Month",
    description: "For professionals that need more power and flexibility.",
    features: [
      "Unlimited receipt scans",
      "Custom budget categories",
      "Unlimited bill splitting",
      "Advanced analytics & insights",
      "Export to CSV / PDF",
      "Priority email support",
    ],
    buttonText: "Get started",
    featured: true,
  },
  // {
  //   name: "Enterprise",
  //   id: "tier-enterprise",
  //   href: "#",
  //   price: "Custom",
  //   period: "/ Year",
  //   description: "For large organizations with custom compliance needs.",
  //   features: [
  //     "Everything in Pro",
  //     "Custom integrations",
  //     "Dedicated account manager",
  //     "SSO & SAML",
  //     "24/7 phone support",
  //     "Unlimited team seats",
  //   ],
  //   buttonText: "Contact sales",
  //   cta: "Contact sales",
  //   featured: false,
  // },
];

export function PricingSection() {
  return (
    <section className="bg-ink-50 dark:bg-[#0a0a0a] py-24 sm:py-32 border-t border-ink-200 dark:border-[#222] transition-colors duration-300" id="pricing">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950 dark:text-white">
            Simple pricing that fits your needs.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-8 sm:p-10 ${
                tier.featured
                  ? "bg-white dark:bg-[#161616] ring-2 ring-brand-500 shadow-2xl"
                  : "bg-white dark:bg-[#161616] border border-ink-200 dark:border-[#262626] text-ink-950 dark:text-white"
              }`}
            >
              <div>
                <h3 id={tier.id} className="text-xl font-bold leading-8 text-ink-950 dark:text-white">
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink-600 dark:text-neutral-400">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-ink-950 dark:text-white">{tier.price}</span>
                  {tier.period && <span className="text-sm font-semibold leading-6 text-ink-500 dark:text-neutral-500">{tier.period}</span>}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={`mt-6 block rounded-full px-3 py-3.5 text-center text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all ${
                    tier.featured
                      ? "bg-brand-500 text-white hover:bg-brand-600"
                      : "bg-ink-100 dark:bg-[#0a0a0a] text-ink-950 dark:text-white hover:bg-ink-200 dark:hover:bg-[#1a1a1a] border border-ink-200 dark:border-[#2a2a2a]"
                  }`}
                >
                  {tier.buttonText}
                </a>
              </div>
              <div className="mt-8 border-t border-dashed border-ink-200 dark:border-[#333] pt-8 flex-1">
                <ul role="list" className="space-y-4 text-sm leading-6 text-ink-700 dark:text-neutral-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 ${tier.featured ? "bg-ink-950 dark:bg-[#e5e5e5] text-white dark:text-black" : "bg-ink-200 dark:bg-[#333] text-ink-950 dark:text-white"}`}>
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
