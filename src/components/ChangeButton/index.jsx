import { LiaExchangeAltSolid } from "react-icons/lia";
import { useLanguage } from "../../hooks/useLanguage";

const ChangeButton = () => {
  const { swapTranslate } = useLanguage();
  return (
    <button
      onClick={swapTranslate}
      className="p-2 rounded-full hover:bg-gray-100 outline-none"
      aria-label="Trocar idioma"
    >
      <LiaExchangeAltSolid />
    </button>
  );
};

export default ChangeButton;
