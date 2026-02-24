import Button from "../Button/Button";
import { useCartState, Product } from "../../store/shopping-cart-context";
import * as S from "./ImgWrapper.styled";

interface ImgWrapperProps {
  image: string;
  category: string;
  product: Product;
}

function ImgWrapper({ image, category, product }: ImgWrapperProps) {
  const { items } = useCartState();

  const cartItem = items.find((item) => item._id === product._id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;

  return (
    <S.StyledWrapperImg>
      <img 
        src={image} 
        alt={category || "Product image"} 
        className={isInCart ? "active" : ""}
      />
      <Button product={product} isInCart={isInCart} quantity={quantity}>
        Add to Cart
      </Button>
    </S.StyledWrapperImg>
  );
}

export default ImgWrapper;
