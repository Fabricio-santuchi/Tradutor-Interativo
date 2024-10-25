import HeaderApp from "./components/HeaderApp";
import ContainerLanguageSelector from "./components/ContainerLanguageSelector";
import TranslationContainer from "./components/TranslationContainer";
import Footer from "./components/Footer";
import MsgError from "./components/MsgError";
import { useContext, useEffect } from "react";
import { LanguageContext } from "./contexts/LanguageContext";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { error, sourceText, targetLang, sourceLang } =
    useContext(LanguageContext);
  const { handleTranslate } = useLanguage();

  useEffect(() => {
    const delay = setTimeout(() => {
      handleTranslate();
    }, 500);

    return () => clearTimeout(delay);
  }, [sourceText, targetLang, sourceLang]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeaderApp />
      <main className="flex-grow flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
          <ContainerLanguageSelector />
          <TranslationContainer />

          {error && <MsgError error={error} />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
