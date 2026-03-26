import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const LanguageSwitch = () => {
  const { lang, setLang } = useContext(AppContext);

  const handleToggleLang = () => {
    setLang(lang === "en" ? "ta" : "en");
  };

  return (
    <>
      <div className="p-4">
        <h2>{lang === "en" ? "Hello" : "வணக்கம்"}</h2>

        <button
          onClick={handleToggleLang}
          className="bg-green-500 text-white px-4 py-2 mt-2"
        >
          Switch Language
        </button>
      </div>
    </>
  );
};

export default LanguageSwitch;
