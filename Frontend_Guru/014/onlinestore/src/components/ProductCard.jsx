// Презентаційний компонент
import Button from "./Button";
import CardImage from "./CardImage";
import CardDescription from "./CardDescription";

function ProductCard({ image, name, header, price, onAddToCart }) {
  return (
    <div className="product-card">
      <CardImage src={image} alt={name || "Product image"} />
      <Button>Add to Cart</Button>
      <CardDescription name={name} header={header} price={price} />
    </div>
  );
}

export default ProductCard;
