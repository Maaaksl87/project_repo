import * as S from "./CardDescription.styled";

function CardDescription({ category, name, price }) {
  return (
    <S.StyledCardDescription>
      <span className="product-card__category">{category}</span>
      <h2 className="product-card__title">{name}</h2>
      <span className="product-card__price">{price}</span>
    </S.StyledCardDescription>
  );
}

export default CardDescription;
