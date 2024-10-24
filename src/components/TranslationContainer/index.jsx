import { useLanguage } from "../../hooks/useLanguage";
import Loader from "../Loader";
import MsgTraduzida from "../MsgTraduzida";
import TextSource from "../TextSource";

const TranslationContainer = () => {
  const { isLoading } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="p-4">
        <TextSource />
      </div>

      <div className="p-4 relative bg-secondaryBackground border-l border-gray-200">
        {isLoading ? <Loader /> : <MsgTraduzida />}
      </div>
    </div>
  );
};

export default TranslationContainer;
