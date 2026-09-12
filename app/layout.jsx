import { Outfit, Cormorant_Garamond, Lora, JetBrains_Mono } from "next/font/google";
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
const dsHeading = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-ds-heading" });
const dsBody = Lora({ subsets: ["latin"], variable: "--font-ds-body" });
const dsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-ds-mono" });

export const metadata = {
  title: "Rob Haynes - Data Engineer & Developer",
  description: "Data Engineer from South Africa based in Manchester working for Jaguar Land Rover (JLR). Full-stack and app developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${dsHeading.variable} ${dsBody.variable} ${dsMono.variable}`}>
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
