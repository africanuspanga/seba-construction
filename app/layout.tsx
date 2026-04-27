import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sebadrilling.co.tz"),
  title: "SEBA Construction & Drilling Ltd | Tanzania",
  description: "Leading drilling and construction company in Tanzania since 2008. Borehole drilling, groundwater exploration, civil construction, dewatering services.",
  keywords: ["borehole drilling Tanzania", "water well drilling", "construction Dar es Salaam", "SEBA drilling", "groundwater exploration", "civil engineering Tanzania"],
  authors: [{ name: "SEBA Construction & Drilling Ltd" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "SEBA Construction & Drilling Ltd",
    description: "Leading drilling and construction company in Tanzania since 2008.",
    type: "website",
    images: ["/images/Seba Hero section image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
