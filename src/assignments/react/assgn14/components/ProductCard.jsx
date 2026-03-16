const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded bg-gray-100">
      <h3 className="font-semibold">{product.name}</h3>

      <p>Price: ₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
