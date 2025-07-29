"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLang, useMessages } from "./LanguageProvider";

export default function Header() {
  const { lang, setLang } = useLang();
  const t = useMessages();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-5xl w-full text-xl tracking-wide transition-all duration-100 ${
        scrolled
          ? "bg-white/60 dark:bg-white/10 backdrop-blur-xl shadow-xl rounded-3xl"
          : "bg-transparent shadow-none rounded-none"
      }`}
    >
      <div className="flex justify-between items-center mx-auto p-4 max-w-6xl">
        <Link href="/" className="font-bold text-2xl">
          chappy
        </Link>
        <div>
          <Link
            href={`${lang}/blog`}
            className="mr-4 text-sm underline transition-colors duration-300 hover:cursor-pointer"
          >
            {t.blog}
          </Link>
          <Link
            href="portfolio"
            className="mr-4 text-sm underline transition-colors duration-300 hover:cursor-pointer"
          >
            {t.portfolio}
          </Link>
          <button
            onClick={() => setLang(lang === "en-US" ? "ja" : "en-US")}
            className="text-sm underline transition-colors duration-300 hover:cursor-pointer"
          >
            {t.switchLang}
          </button>
        </div>
      </div>
    </header>
  );
}
