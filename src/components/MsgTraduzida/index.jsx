import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const MsgTraduzida = () => {
  const { translatedText } = useContext(LanguageContext);
  return <p className="text-lg text-textColor">{translatedText}</p>;
};

export default MsgTraduzida;
