function CardDescription({name, header, price}) {
  return (
    <div className="product-card__description">
      <span className="product-card__short-name">{name}</span>
      <h2 className="product-card__header">{header}</h2>
      <span className="product-card__price">{price}</span>
    </div>
  );
}

export default CardDescription;
