import { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");
  const [cart, setCart] = useState(0);

  return (
    <>
      <AppContext.Provider
        value={{ theme, setTheme, lang, setLang, cart, setCart }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
