import { Outfit } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Theme Provider
import ThemeProvider from "@/components/ThemeProvider";

// Vercel insights
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Rob Haynes - Full Stack Developer",
  description: "Full Stack Developer based in Manchester, UK. Specialising in Python, Swift, and Web Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
