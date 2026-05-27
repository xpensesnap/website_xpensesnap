"use client";

import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AppleShowcase } from "../components/AppleShowcase";
import { PricingSection } from "../components/PricingSection";
import { DeepFeatures } from "../components/DeepFeatures";
import { FeaturesHeader } from "../components/FeaturesHeader";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      {!loading && (
        <main className="flex flex-col min-h-screen bg-ink-50 dark:bg-[#050505] transition-colors duration-300">
          <Navbar />
          <HeroSection />
          <AppleShowcase />
          
          <div id="features">
            <FeaturesHeader />
            <div className="pt-8">
              <DeepFeatures />
            </div>
          </div>
          
          <div id="pricing"><PricingSection /></div>
          <CTASection />
          <Footer />
        </main>
      )}
    </>
  );
}
