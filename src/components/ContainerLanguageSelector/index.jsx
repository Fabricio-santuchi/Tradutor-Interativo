import { useContext } from "react";
import ChangeButton from "../ChangeButton";
import SelectLang from "../SelectLang";
import { LanguageContext } from "../../contexts/LanguageContext";

const ContainerLanguageSelector = () => {
  const { sourceLang, setSourceLang, targetLang, setTargetLang, languages } =
    useContext(LanguageContext);

  const handleSourceChange = (event) => {
    const newSourceLang = event.target.value;

    if (newSourceLang === targetLang) {
      const newTargetLang = languages.find(
        (lang) => lang.code !== newSourceLang
      ).code;
      setTargetLang(newTargetLang);
    }

    setSourceLang(newSourceLang);
  };

  const handleTargetChange = (event) => {
    const newTargetLang = event.target.value;

    if (newTargetLang === sourceLang) {
      const newSourceLang = languages.find(
        (lang) => lang.code !== newTargetLang
      ).code;
      setSourceLang(newSourceLang);
    }

    setTargetLang(newTargetLang);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <SelectLang valor={sourceLang} mundanca={handleSourceChange} />

      <ChangeButton />

      <SelectLang valor={targetLang} mundanca={handleTargetChange} />
    </div>
  );
};

export default ContainerLanguageSelector;
