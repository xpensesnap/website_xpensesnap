import { Navbar } from "../../components/Navbar";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";

export const metadata = {
  title: "Contact - XpenseSnap",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-ink-50 dark:bg-[#050505] transition-colors duration-300">
      <Navbar />
      <div className="pt-24 flex-grow">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
