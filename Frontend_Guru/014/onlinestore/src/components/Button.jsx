import { styled } from "styled-components";
import CartIcon from "./../assets/images/icon-add-to-cart.svg?react";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  color: black;
  border-radius: 20px;
  border: 1px solid grey;
  padding: 10px 25px;
  gap: 8px;
  width: 150px;

  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

function Button({
  children,
  product,
  addToCart,
  isInCart,
  quantity,
  updateQuantity,
}) {
  if (isInCart) {
    return (
      <>
        <button onClick={() => updateQuantity(product._id, quantity - 1)}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => updateQuantity(product._id, quantity + 1)}>
          +
        </button>
      </>
    );
  }
  return (
    <StyledButton
      className="product-card__button"
      onClick={() => addToCart(product)}
    >
      <CartIcon />
      {children}
    </StyledButton>
  );
}

export default Button;
