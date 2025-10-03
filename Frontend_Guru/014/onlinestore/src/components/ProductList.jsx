import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          image={product.image}
          category={product.category}
          header={product.header}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
