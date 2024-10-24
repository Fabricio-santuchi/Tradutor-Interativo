import { useLanguage } from "../../hooks/useLanguage";

const TextSource = () => {
  const { sourceText, setSourceText } = useLanguage();

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
