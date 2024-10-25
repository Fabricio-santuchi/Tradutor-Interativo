import { useContext } from "react";
import Loader from "../Loader";
import MsgTraduzida from "../MsgTraduzida";
import TextSource from "../TextSource";
import { LanguageContext } from "../../contexts/LanguageContext";

const TranslationContainer = () => {
  const { isLoading } = useContext(LanguageContext);

  return (
    <div className="grid grid-cols-1 grid-rows-2 min-[490px]:grid-cols-2 min-[490px]:grid-rows-1 ">
      <div className="p-4">
        <TextSource />
      </div>

      <div className="p-4 relative bg-secondaryBackground border-t border-gray-200 min-[490px]:border-l min-[490px]:border-t-0">
        {isLoading ? <Loader /> : <MsgTraduzida />}
      </div>
    </div>
  );
};

export default TranslationContainer;
