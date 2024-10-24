import { useContext, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import axios from "axios";

export const useLanguage = () => {
  const {
    sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    sourceText,
    setSourceText,
    languages,
    isLoading,
    setIsLoading,
    translatedText,
    setTranslatedText,
    error,
    setError,
  } = useContext(LanguageContext);

  const handleTranslate = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${sourceText}&langpair=${sourceLang}|${targetLang}`
      );
      if (response.data && response.data.responseData) {
        setTranslatedText(response.data.responseData.translatedText);
      } else {
        throw new Error("Dados de tradução não encontrados.");
      }
    } catch (err) {
      setError(`Erro ao tentar traduzir: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (sourceText) {
      const delay = setTimeout(() => {
        handleTranslate();
      }, 500);

      return () => clearTimeout(delay);
    }
  }, [sourceText, targetLang, sourceLang]);

  const swapTranslate = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return {
    sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    sourceText,
    setSourceText,
    languages,
    isLoading,
    translatedText,
    error,
    swapTranslate,
  };
};
