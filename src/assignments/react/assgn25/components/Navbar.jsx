import { useContext } from "react";
import { AppContext } from "../AppContext";

const Navbar = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <div className="p-4 bg-gray-800 text-white">Cart: {cart}</div>
    </>
  );
};

export default Navbar;
