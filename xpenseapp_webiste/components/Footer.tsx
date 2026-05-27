"use client";

import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-ink-200 dark:border-[#222] py-16 sm:py-24">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="md:col-span-1 lg:col-span-2 flex flex-col items-start">
            <Logo size={28} asLink={false} />
            <p className="mt-6 text-sm leading-relaxed text-ink-600 dark:text-neutral-400 max-w-sm">
              Snap receipts, split bills, track budgets. The fastest way to keep tabs on your money — built for India, made for everyone.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-3 lg:col-span-2 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-ink-950 dark:text-white mb-6">Product</h3>
              <ul className="space-y-4 text-sm text-ink-600 dark:text-neutral-400">
                <li><a href="/features" className="hover:text-ink-950 dark:hover:text-white transition-colors">Features</a></li>
                <li><a href="/#pricing" className="hover:text-ink-950 dark:hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/" className="hover:text-ink-950 dark:hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ink-950 dark:text-white mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-ink-600 dark:text-neutral-400">
                <li><a href="/about" className="hover:text-ink-950 dark:hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-ink-950 dark:hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-ink-950 dark:text-white mb-6">Legal</h3>
              <ul className="space-y-4 text-sm text-ink-600 dark:text-neutral-400">
                <li><a href="#" className="hover:text-ink-950 dark:hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-ink-950 dark:hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-ink-200 dark:border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-500 dark:text-neutral-500">
          <p>© {new Date().getFullYear()} XpenseSnap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
