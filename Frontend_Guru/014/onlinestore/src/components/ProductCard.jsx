// Презентаційний компонент

function ProductCard({ image, name, header, price, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={image}
        alt={name || "Product image"}
      />

      <button
        className="product-card__button"
        onClick={onAddToCart}
        aria-label={`Add ${name || "product"} to cart`}
      >
        Add to Cart
      </button>

      <div className="product-card__description">
        <span className="product-card__short-name">{name}</span>
        <h2 className="product-card__header">{header}</h2>
        <span className="product-card__price">{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
