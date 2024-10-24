import { useLanguage } from "../../hooks/useLanguage";
import ChangeButton from "../ChangeButton";
import SelectLang from "../SelectLang";

const ContainerLanguageSelector = () => {
  const { sourceLang, setSourceLang, targetLang, setTargetLang } =
    useLanguage();

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <SelectLang
        valor={sourceLang}
        mundanca={(event) => setSourceLang(event.target.value)}
      />

      <ChangeButton />

      <SelectLang
        valor={targetLang}
        mundanca={(event) => setTargetLang(event.target.value)}
      />
    </div>
  );
};

export default ContainerLanguageSelector;
