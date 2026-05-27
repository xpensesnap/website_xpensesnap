import { Navbar } from "../../components/Navbar";
import { AboutSection } from "../../components/AboutSection";
import { Footer } from "../../components/Footer";

export const metadata = {
  title: "About - XpenseSnap",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-ink-50 dark:bg-[#050505] transition-colors duration-300">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
