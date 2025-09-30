import { styled } from "styled-components";
import CartIcon from "./../assets/images/icon-add-to-cart.svg?react";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  color: black;
  border-radius: 20px;
  border: 1px solid red;
  padding: 10px 25px;
  gap: 8px;
`;

function Button({ children, onClick, ...props }) {
  return (
    <StyledButton className="product-card__button" onClick={onClick} {...props}>
      <CartIcon />
      {children}
    </StyledButton>
  );
}

export default Button;
