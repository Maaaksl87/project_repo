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

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(14, 86%, 42%);
  color: #fff;
  border-radius: 20px;
  border: 1px solid grey;
  padding: 10px;
  width: 150px;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const QuantityButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 16px;

  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fff;
    color: hsl(14, 86%, 42%);
  }
`;

const QuantitySpan = styled.span`
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;

function Button({
  children,
  product,
  addToCart,
  isInCart,
  quantity,
  updateQuantity,
}) {
  if (isInCart && quantity > 0) {
    return (
      <>
        <QuantityControls>
          <QuantityButton
            onClick={() => updateQuantity(product._id, quantity - 1)}
          >
            -
          </QuantityButton>
          <span>{quantity}</span>
          <QuantityButton
            onClick={() => updateQuantity(product._id, quantity + 1)}
          >
            +
          </QuantityButton>
        </QuantityControls>
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
