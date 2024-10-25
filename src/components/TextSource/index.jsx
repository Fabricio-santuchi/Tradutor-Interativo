import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const TextSource = () => {
  const { sourceText, setSourceText } = useContext(LanguageContext);

  return (
    <textarea
      value={sourceText}
      onChange={(event) => setSourceText(event.target.value)}
      className="w-full h-40 text-lg text-textColor bg-transparent resize-none border-none outline-none"
      placeholder="Digite o texto que deseja traduzir..."
      aria-label="Texto a ser traduzido"
    ></textarea>
  );
};

export default TextSource;
