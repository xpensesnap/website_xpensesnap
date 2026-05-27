"use client";

import { Mail, Smartphone, MapPin, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-ink-50 dark:bg-[#050505] min-h-[80vh] flex items-center py-24 lg:py-32 transition-colors duration-300">
      <div className="container-x w-full">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left Column: Typography & Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="mb-20">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-ink-950 dark:text-white mb-8 leading-[1.05]">
                Talk to a<br />human.
              </h2>
              <p className="text-xl sm:text-2xl text-ink-600 dark:text-neutral-400 leading-relaxed">
                Bug? Feature wish? Press enquiry? Just want to say hi? Drop us a note — a real person reads everything and writes back within a working day.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0 text-ink-300 dark:text-neutral-600">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-950 dark:text-white mb-1 uppercase tracking-widest">Email</h3>
                  <a href="mailto:support@xpensesnap.com" className="text-xl sm:text-2xl font-medium text-ink-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-white transition-colors">
                    support@xpensesnap.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0 text-ink-300 dark:text-neutral-600">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-950 dark:text-white mb-1 uppercase tracking-widest">In-app</h3>
                  <p className="text-xl sm:text-2xl font-medium text-ink-600 dark:text-neutral-400 flex items-center gap-3">
                    Profile <ArrowRight className="w-5 h-5 opacity-40" /> Help <ArrowRight className="w-5 h-5 opacity-40" /> Contact
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0 text-ink-300 dark:text-neutral-600">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-950 dark:text-white mb-1 uppercase tracking-widest">Office</h3>
                  <p className="text-xl sm:text-2xl font-medium text-ink-600 dark:text-neutral-400">
                    Indiranagar, Bengaluru, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="w-full lg:w-7/12 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-sm font-bold text-ink-950 dark:text-white ml-1">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-2xl border border-ink-200 dark:border-[#333] bg-white dark:bg-[#111] px-6 py-4 text-ink-950 dark:text-white placeholder:text-ink-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-brand-500 dark:focus:ring-white focus:border-transparent transition-all shadow-sm text-lg"
                      placeholder="Priya Sharma"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-sm font-bold text-ink-950 dark:text-white ml-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="priya@example.com"
                      className="block w-full rounded-2xl border border-ink-200 dark:border-[#333] bg-white dark:bg-[#111] px-6 py-4 text-ink-950 dark:text-white placeholder:text-ink-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-brand-500 dark:focus:ring-white focus:border-transparent transition-all shadow-sm text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="subject" className="block text-sm font-bold text-ink-950 dark:text-white ml-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="A subject line, ideally a clear one"
                    className="block w-full rounded-2xl border border-ink-200 dark:border-[#333] bg-white dark:bg-[#111] px-6 py-4 text-ink-950 dark:text-white placeholder:text-ink-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-brand-500 dark:focus:ring-white focus:border-transparent transition-all shadow-sm text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="block text-sm font-bold text-ink-950 dark:text-white ml-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Tell us what's on your mind…"
                    className="block w-full rounded-2xl border border-ink-200 dark:border-[#333] bg-white dark:bg-[#111] px-6 py-4 text-ink-950 dark:text-white placeholder:text-ink-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-brand-500 dark:focus:ring-white focus:border-transparent transition-all shadow-sm text-lg resize-none"
                  />
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-ink-200 dark:border-[#222]">
                  <p className="text-sm text-ink-500 dark:text-neutral-500 max-w-[200px] leading-relaxed">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-brand-500 dark:bg-white px-10 py-5 text-lg font-bold text-white dark:text-black hover:bg-brand-600 dark:hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
