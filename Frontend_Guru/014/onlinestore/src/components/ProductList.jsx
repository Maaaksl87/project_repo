import { styled } from "styled-components";
import ProductCard from "./ProductCard";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 260px);
  gap: 20px;
`;

function ProductList({ products, addToCart, cartItems, updateQuantity }) {
  return (
    <StyledProductList className="product-list">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product._id}
          addToCart={addToCart}
          cartItems={cartItems}
          updateQuantity={updateQuantity}
        />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
