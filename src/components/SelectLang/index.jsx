/* eslint-disable react/prop-types */
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const SelectLang = ({ valor, mundanca }) => {
  const { languages } = useContext(LanguageContext);

  return (
    <select
      value={valor}
      onChange={mundanca}
      className="text-sm text-textColor bg-transparent border-none focus:outline-none cursor-pointer"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default SelectLang;
