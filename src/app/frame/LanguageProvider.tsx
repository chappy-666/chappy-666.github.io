"use client";

import { createContext, useContext, useState } from "react";
import { messages } from "../lib/i18n";

type Language = "en" | "ja";
const LangContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function useMessages() {
  const { lang } = useLang();
  return messages[lang];
}
