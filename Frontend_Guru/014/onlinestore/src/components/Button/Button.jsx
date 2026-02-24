import CartIcon from "../../assets/images/icon-add-to-cart.svg?react";
import { useCartActions } from "../../store/shopping-cart-context";
import * as S from "./Button.styled";

function Button({ children, product, isInCart, quantity }) {
  const { addToCart, updateQuantity } = useCartActions();

  if (isInCart && quantity > 0) {
    return (
      <S.QuantityControls>
        <S.QuantityButton
          onClick={() => updateQuantity(product._id, quantity - 1)}
        >
          -
        </S.QuantityButton>
        <span>{quantity}</span>
        <S.QuantityButton
          onClick={() => updateQuantity(product._id, quantity + 1)}
        >
          +
        </S.QuantityButton>
      </S.QuantityControls>
    );
  }
  return (
    <S.StyledButton
      className="product-card__button"
      onClick={() => addToCart(product)}
    >
      <CartIcon />
      {children}
    </S.StyledButton>
  );
}

export default Button;
