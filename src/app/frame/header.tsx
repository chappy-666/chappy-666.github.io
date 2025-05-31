"use client";

import Link from "next/link";
import React from "react";
import { useLang, useMessages } from "./LanguageProvider";

export default function Header() {
  const { lang, setLang } = useLang();
  const t = useMessages();
  return (
    <header className="w-full text-xl tracking-wide">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 ">
        <Link href="/" className="font-bold text-2xl">
          chappy
        </Link>
        <button
          onClick={() => setLang(lang === "en" ? "ja" : "en")}
          className="text-sm underline hover:cursor-pointer transition-colors duration-300"
        >
          {t.switchLang}
        </button>
      </div>
    </header>
  );
}
