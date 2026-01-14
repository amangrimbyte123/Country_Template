import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getBasicInfo } from "./lib/database";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate metadata dynamically from database (Server Component - great for SEO)
export async function generateMetadata(): Promise<Metadata> {
  const basicInfo = await getBasicInfo();
  
  return {
    title: basicInfo?.metaTitle || "ServiceFinder Brazil – Find Local Repair, Cleaning & HVAC Services",
    description: basicInfo?.metaDescription || "ServiceFinder helps you find trusted air conditioner repair, washing machine service, plumbing, and home services in your city.",
    keywords: basicInfo?.metaKeywords || "local services, ac repair, hvac, washing machine repair, plumber, electrician",
    openGraph: {
      title: basicInfo?.ogTitle || "ServiceFinder Brazil",
      description: basicInfo?.ogDescription || "Find verified service providers in your city.",
      images: basicInfo?.ogImage ? [basicInfo.ogImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: basicInfo?.twitterTitle || "ServiceFinder Brazil",
      description: basicInfo?.twitterDescription || "Search and connect with trusted service providers near you.",
      images: basicInfo?.twitterImage ? [basicInfo.twitterImage] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch basic info for header
  const basicInfo = await getBasicInfo();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header basicInfo={basicInfo || undefined} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
