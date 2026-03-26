import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart, lang } = useContext(AppContext);

  return (
    <>
      <div className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/react/25">Home</Link>
        <Link to="/react/25/cart">Cart</Link>

        <span className="ml-auto">
          {lang === "en" ? "Cart" : "கார்ட்"}: {cart}
        </span>
      </div>
    </>
  );
};

export default Navbar;
