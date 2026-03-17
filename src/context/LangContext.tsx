"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "es" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (es: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "es",
  setLang: () => {},
  t: (es) => es,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("cabo-lang") as Lang | null;
    if (saved) {
      setLangState(saved);
    } else if (!navigator.language?.startsWith("es")) {
      setLangState("en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("cabo-lang", l);
    document.documentElement.lang = l;
    document.title =
      l === "en"
        ? "Cabo Vivo — Your Adventure, Your Way"
        : "Cabo Vivo — Tu Aventura, a Tu Manera";
  };

  const t = (es: string, en: string) => (lang === "en" ? en : es);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
