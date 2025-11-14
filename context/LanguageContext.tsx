"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import id from "../locales/id.json";
import en from "../locales/en.json";

type LangType = "id" | "en";
type TranslationKeys = keyof typeof id;
type Translation = Record<TranslationKeys, string>;

interface LangContextProps {
  lang: LangType;
  t: (key: TranslationKeys) => string;
  setLang: (lang: LangType) => void;
}

const translations: Record<LangType, Translation> = { id, en };

const LanguageContext = createContext<LangContextProps>({
  lang: "id",
  t: (key) => key,
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<LangType>("id");

  // AUTO-DETECT LANGUAGE + RESTORE FROM LOCALSTORAGE
  useEffect(() => {
    const saved = localStorage.getItem("lang") as LangType | null;
    if (saved) {
      setLang(saved);
      return;
    }

    const browserLang = navigator.language.startsWith("id") ? "id" : "en";
    setLang(browserLang);
    localStorage.setItem("lang", browserLang);
  }, []);

  const changeLang = (newLang: LangType) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: TranslationKeys): string => {
    const dict = translations[lang] as Record<string, string>;
    return dict[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, t, setLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
