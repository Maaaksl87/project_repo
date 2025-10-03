// Презентаційний компонент
import { styled } from "styled-components";

import ImgWrapper from "./ImgWrapper";
import CardDescription from "./CardDescription";

const StyledProductCard = styled.div`
  max-width: 220px;
  margin-bottom: 20px;
`;
function ProductCard({ image, category, header, price, onAddToCart }) {
  return (
    <StyledProductCard className="product-card">
      <ImgWrapper className="image-wrapper" image={image} category={category} />
      <CardDescription category={category} header={header} price={price} />
    </StyledProductCard>
  );
}

export default ProductCard;
