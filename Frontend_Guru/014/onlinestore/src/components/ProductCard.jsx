// Презентаційний компонент
import { styled } from "styled-components";

import ImgWrapper from "./ImgWrapper";
import CardDescription from "./CardDescription";

const StyledProductCard = styled.div`
  width: 100%;
`;
function ProductCard({ product, cartItems, addToCart }) {
  const {image, category, name, price} = product;

  return (
    <StyledProductCard >
      <ImgWrapper image={image.desktop} category={category} product={product} cartItems={cartItems} addToCart={addToCart}/>
      <CardDescription category={category} name={name} price={`$${Number(price).toFixed(2)}`} />
    </StyledProductCard>
  );
}

export default ProductCard;
