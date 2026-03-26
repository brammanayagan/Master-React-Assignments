import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import AppProvider from "./context/AppProvider";
import { AppContext } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

const InnerApp = () => {
  const { theme } = useContext(AppContext);

  const themeClasses = {
    light: "bg-white text-black",
    dark: "bg-black text-white",
  };

  return (
    <>
      <div className={`min-h-screen ${themeClasses[theme]}`}>
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
};

const Assgn25 = () => {
  return (
    <>
      <AppProvider>
        <InnerApp />
      </AppProvider>
    </>
  );
};

export default Assgn25;
