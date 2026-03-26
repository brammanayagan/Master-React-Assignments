import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CartPage = () => {
  const { cart, setCart } = useContext(AppContext);

  const handleAdd = () => {
    setCart(cart + 1);
  };

  return (
    <>
      <div className="p-4">
        <h2>Cart Items: {cart}</h2>

        <button
          onClick={handleAdd}
          className="bg-purple-500 text-white px-4 py-2 mt-2"
        >
          Add Product
        </button>
      </div>
    </>
  );
};

export default CartPage;
