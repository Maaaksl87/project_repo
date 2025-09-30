function CardImage({ src, alt }) {
  return (
    <img
      className="product-card__image"
      src={src}
      alt={alt || "Product image"}
    />
  );
}

export default CardImage;
