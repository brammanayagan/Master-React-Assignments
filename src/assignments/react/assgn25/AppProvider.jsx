import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");
  const [cart, setCart] = useState(0);
  const [role, setRole] = useState("user");

  const handleThemeEffect = () => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  };

  useEffect(() => {
    handleThemeEffect();
  }, [theme]);

  return (
    <>
      <AppContext.Provider
        value={{ theme, setTheme, lang, setLang, cart, setCart, role, setRole }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
