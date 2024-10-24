import HeaderApp from "./components/HeaderApp";
import ContainerLanguageSelector from "./components/ContainerLanguageSelector";
import TranslationContainer from "./components/TranslationContainer";
import Footer from "./components/Footer";
import MsgError from "./components/MsgError";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { error } = useLanguage();

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
