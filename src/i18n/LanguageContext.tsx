import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { translations, type Translation } from "./translations";
import type { Lang } from "./types";

type LanguageContextValue = {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "be-atelier-language";

function getInitialLanguage(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "pt" ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Lang>(getInitialLanguage);

  function setLanguage(lang: Lang) {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage may be unavailable; language still updates for this session
    }
  }

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
