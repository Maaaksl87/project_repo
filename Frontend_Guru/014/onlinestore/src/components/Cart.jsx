import React from "react";
import { styled } from "styled-components";

const CartContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 18px;
  color: hsl(14, 86%, 42%);
  font-weight: 700;
  margin-bottom: 20px;
`;

const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: hsl(12, 20%, 44%);
    font-size: 12px;
    font-weight: 600;
    margin: 10px 0px;
  }
`;

function Cart() {
  return (
    <CartContainer>
      <Title className="cart-title">Your Cart (0)</Title>
      <EmptyDiv className="cart-image">
        <img src="..\assets\images\illustration-empty-cart.svg" alt="" />
        <span>Your added items will appear here</span>
      </EmptyDiv>
    </CartContainer>
  );
}

export default Cart;
