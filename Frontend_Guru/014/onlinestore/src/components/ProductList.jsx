import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ProductCard from "./ProductCard";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <StyledProductList className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          image={product.image.desktop}
          category={product.category}
          header={product.name}
          price={`$${product.price}`}
        />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
