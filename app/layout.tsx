// import ButtonToTop from "@/components/ButtonToTop";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuća znanja – partner porodici u obrazovanju i vaspitanju",
  description:
    "Kuća znanja na Vračaru – sigurno i kreativno okruženje za decu od 7 do 15 godina. Podrška u učenju, jezici, umetnost i razvoj kreativnosti.",
  icons: {
    icon: "/android-chrome-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "kuća znanja vračar",
    "kuca znanja beograd",
    "kreativno obrazovanje dece",
    "produženi boravak vračar",
    "produženi boravak beograd",
    "učenje za decu beograd",
    "kreativne radionice za decu",
    "razvoj kreativnosti kod dece",
    "škola za decu 7-15 godina",
    "kreativno dete",
    "obrazovanje dece vračar",
  ],
  alternates: {
    canonical: "https://www.kucaznanja.edu.rs",
  },
};

export default function RootLayout() {
//   {
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-gradient-to-br from-white to-[#f1f1f1] text-base md:text-xl`}
      >
        {/* <Header />
        {children}
        <ButtonToTop />
        <Footer /> */}
      </body>
    </html>
  );
}
