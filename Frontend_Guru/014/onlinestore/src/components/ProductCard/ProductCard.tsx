import ImgWrapper from "../ImgWrapper/ImgWrapper";
import CardDescription from "../CardDescription/CardDescription";
import * as S from "./ProductCard.styled";
import { Product } from "../../store/shopping-cart-context";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { image, category, name, price } = product;

  return (
    <S.Card>
      <ImgWrapper image={image.desktop} category={category} product={product} />
      <CardDescription
        category={category}
        name={name}
        price={`$${Number(price).toFixed(2)}`}
      />
    </S.Card>
  );
}

export default ProductCard;
