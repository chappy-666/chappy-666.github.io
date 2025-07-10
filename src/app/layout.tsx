import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./frame/header";
import { LanguageProvider } from "./frame/LanguageProvider";
import Footer from "./frame/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chappy - Full Stack Developer",
  keywords: [
    "Chappy",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "Angular",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "Portfolio",
  ],
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <LanguageProvider>
          <Header />
          <div className="flex-grow mx-auto pt-20 pb-4 w-full max-w-5xl">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
