import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { SmoothScroll } from "../components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XpenseSnap | The smartest way to track expenses",
  description: "Point your camera, split the bill, set budgets, and visualize your money. Powered by lightning-fast OCR.",
  keywords: ["expense tracker", "budgeting app", "split bills", "OCR receipt scanner", "personal finance"],
  openGraph: {
    title: "XpenseSnap | The smartest way to track expenses",
    description: "Point your camera, split the bill, set budgets, and visualize your money. Powered by lightning-fast OCR.",
    url: "https://xpensesnap.com",
    siteName: "XpenseSnap",
    images: [
      {
        url: "https://xpensesnap.com/og-image.webp", // Make sure to upload an og-image.jpg to your public folder!
        width: 1200,
        height: 630,
        alt: "XpenseSnap Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XpenseSnap | The smartest way to track expenses",
    description: "Point your camera, split the bill, set budgets, and visualize your money. Powered by lightning-fast OCR.",
    images: ["https://xpensesnap.com/og-image.webp"],
  },
  alternates: {
    canonical: "https://xpensesnap.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('xpense-theme') === 'dark' || (!('xpense-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="flex flex-col bg-ink-50 dark:bg-ink-950 text-ink-950 dark:text-ink-50 transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
