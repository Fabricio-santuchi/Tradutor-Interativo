/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [sourceLang, setSourceLang] = useState("pt");
  const [targetLang, setTargetLang] = useState("en");
  const [sourceText, setSourceText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [error, setError] = useState("");

  const languages = [
    { code: "en", name: "Inglês" },
    { code: "es", name: "Espanhol" },
    { code: "fr", name: "Francês" },
    { code: "de", name: "Alemão" },
    { code: "it", name: "Italiano" },
    { code: "pt", name: "Português" },
  ];
  
  return (
    <LanguageContext.Provider
      value={{
        languages,
        sourceLang,
        setSourceLang,
        targetLang,
        setTargetLang,
        sourceText,
        setSourceText,
        isLoading,
        setIsLoading,
        translatedText,
        setTranslatedText,
        error,
        setError,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
