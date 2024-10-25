import { useContext } from "react";
import ChangeButton from "../ChangeButton";
import SelectLang from "../SelectLang";
import { LanguageContext } from "../../contexts/LanguageContext";

const ContainerLanguageSelector = () => {
  const { sourceLang, setSourceLang, targetLang, setTargetLang } =
    useContext(LanguageContext);

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
