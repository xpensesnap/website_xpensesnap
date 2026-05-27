import { Navbar } from "../../components/Navbar";
import { DeepFeatures } from "../../components/DeepFeatures";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/CTASection";
import { FeaturesHeader } from "../../components/FeaturesHeader";

export const metadata = {
  title: "Features - XpenseSnap",
};

export default function FeaturesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-ink-50 dark:bg-[#050505] transition-colors duration-300">
      <Navbar />
      
      <FeaturesHeader />

      <div className="pt-8">
        <DeepFeatures />
      </div>
      
      <CTASection />
      <Footer />
    </main>
  );
}
