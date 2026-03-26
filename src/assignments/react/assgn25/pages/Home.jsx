import ThemeSwitch from "../components/ThemeSwitch";
import LanguageSwitch from "../components/LanguageSwitch";

const Home = () => {
  return (
    <>
      <div className="p-4">
        <ThemeSwitch />
        <LanguageSwitch />
      </div>
    </>
  );
};

export default Home;
