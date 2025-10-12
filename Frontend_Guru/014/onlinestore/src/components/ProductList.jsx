import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ProductCard from "./ProductCard";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 260px);
  gap: 20px;
`;

function ProductList({ addToCart, cartItems }) {
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
          // product={product}
          // key={product._id}
          // image={product.image.desktop} // покищо отримуємо десктопну версію картинки
          // category={product.category}
          // header={product.name}
          // price={`$${product.price}`}
          // addToCart={addToCart}
          // cartItems={cartItems}

          product={product}
          key={product._id}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
