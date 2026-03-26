import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CartPage = () => {
  const { cart, setCart } = useContext(AppContext);

  const handleAdd = () => {
    setCart((prev) => prev + 1);
  };

  const handleSelect = (e) => {
    setCart(Number(e.target.value));
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
        <select onChange={handleSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </>
  );
};

export default CartPage;
