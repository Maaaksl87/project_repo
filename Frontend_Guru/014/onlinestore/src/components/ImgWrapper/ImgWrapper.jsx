import Button from "../Button/Button";
import { useCartState } from "../../store/shopping-cart-context";
import * as S from "./ImgWrapper.styled";

function ImgWrapper({ image, category, product }) {
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
