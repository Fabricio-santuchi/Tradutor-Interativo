import { useContext, useCallback } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import axios from "axios";

export const useLanguage = () => {
  const {
    sourceLang,
    targetLang,
    sourceText,
    setSourceText,
    setTranslatedText,
    setIsLoading,
    setError,
    setSourceLang,
    setTargetLang,
    translatedText,
  } = useContext(LanguageContext);

  const handleTranslate = useCallback(async () => {
    if (!sourceText.trim()) return setTranslatedText("");

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
  }, [
    sourceText,
    sourceLang,
    targetLang,
    setIsLoading,
    setError,
    setTranslatedText,
  ]);

  const swapTranslate = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return {
    handleTranslate,
    swapTranslate,
  };
};
