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
  title: "الأذكار اليومية",
  description: "موقع للأذكار والتسبيحات اليومية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased islamic-pattern min-h-screen`}>
        <div className="fixed inset-0 bg-[url('/images/mosque-pattern.svg')] opacity-[0.02] pointer-events-none" />
        <nav className="bg-primary/10 backdrop-blur-sm p-4 sticky top-0 z-50 shadow-islamic">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl text-center font-bold text-primary">أذكار المسلم</h1>
          </div>
        </nav>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
