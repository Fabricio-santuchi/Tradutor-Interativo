import { useLanguage } from "../../hooks/useLanguage";

const MsgTraduzida = () => {
  const { translatedText } = useLanguage();
  return <p className="text-lg text-textColor">{translatedText}</p>;
};

export default MsgTraduzida;
