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
    title: basicInfo?.metaTitle || "ServiceFinder Brazil – Encontre Reparos Locais, Limpeza e Serviços de Climatização",
    description: basicInfo?.metaDescription || "ServiceFinder ajuda você a encontrar reparo de ar condicionado confiável, serviço de lavadora, encanamento e serviços domésticos na sua cidade.",
    keywords: basicInfo?.metaKeywords || "serviços locais, reparo de ar condicionado, climatização, reparo de lavadora, encanador, eletricista",
    openGraph: {
      title: basicInfo?.ogTitle || "ServiceFinder Brazil",
      description: basicInfo?.ogDescription || "Encontre prestadores de serviços verificados na sua cidade.",
      images: basicInfo?.ogImage ? [basicInfo.ogImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: basicInfo?.twitterTitle || "ServiceFinder Brazil",
      description: basicInfo?.twitterDescription || "Busque e conecte-se com prestadores de serviços confiáveis perto de você.",
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
    <html lang="pt-BR">
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
