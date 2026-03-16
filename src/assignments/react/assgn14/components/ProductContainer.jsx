import ProductCard from "./ProductCard";

const ProductContainer = () => {
  const products = [
    { id: 1, name: "Laptop", price: 56000 },
    { id: 2, name: "Mobile", price: 30000 },
  ];

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-3">Products</h2>

      <div className="flex gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
