import { styled } from "styled-components";
const StyledCardDescription = styled.article`
  text-align: left;

  .product-card__category {
    color: grey;
  }
  .product-card__title {
    margin: 5px 0;
  }
  .product-card__price {
    color: hsl(14, 86%, 42%);
  }
`;

function CardDescription({ category, header, price }) {
  return (
    <StyledCardDescription>
      <span className="product-card__category">{category}</span>
      <h2 className="product-card__title">{header}</h2>
      <span className="product-card__price">{price}</span>
    </StyledCardDescription>
  );
}

export default CardDescription;
