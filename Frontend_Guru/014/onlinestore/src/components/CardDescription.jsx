import { styled } from "styled-components";
const StyledCardDescription = styled.article`
  .product-card__category {
    color: grey;
  }
  .product-card__price {
    color: orange;
  }
`;

function CardDescription({ category, header, price }) {
  return (
    <StyledCardDescription className="product-card__description">
      <span className="product-card__category">{category}</span>
      <h2 className="product-card__title">{header}</h2>
      <span className="product-card__price">{price}</span>
    </StyledCardDescription>
  );
}

export default CardDescription;
