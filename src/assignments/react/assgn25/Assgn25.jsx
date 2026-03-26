import Navbar from "./components/Navbar";
import ThemeSwitch from "./components/ThemeSwitch";
import LanguageSwitch from "./components/LanguageSwitch";
import CartSection from "./components/CartSection";
import RoleSection from "./components/RoleSection";
import AppProvider from "./AppProvider";

const Assgn25 = () => {
  return (
    <>
      <AppProvider>
        <Navbar />
        <ThemeSwitch />
        <LanguageSwitch />
        <CartSection />
        <RoleSection />
      </AppProvider>
    </>
  );
};

export default Assgn25;
