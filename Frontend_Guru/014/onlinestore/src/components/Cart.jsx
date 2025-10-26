import React, { useMemo } from "react";
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

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const WrapperDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  h4.name,
  p.total-price,
  span.quantity {
    font-weight: 500;
  }
  span.quantity {
    color: hsl(14, 86%, 42%);
  }

  p.price {
    color: hsl(7, 20%, 60%);
  }
  p.total-price {
    color: hsl(12, 20%, 44%);
  }
`;
const CartItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const TotalSum = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: hsl(0, 0%, 95%);
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  color: hsl(14, 86%, 42%);
  text-align: center;
`;

const QuantityButton = styled.button`
  border-radius: 50%;
  border: hsl(7, 20%, 60%) 1px solid;
  width: 16px;
  padding: 3px;

  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.increment {
    background-color: #fff;
    color: hsl(14, 86%, 42%);
  }
`;

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  // мемоізований розрахунок, перераховується тільки при зміні cartItems
  const { totalItems, totalSum } = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => ({
        totalItems: acc.totalItems + item.quantity,
        totalSum: acc.totalSum + item.price * item.quantity,
      }),
      { totalItems: 0, totalSum: 0 }
    );
  }, [cartItems]);

  return (
    <CartContainer>
      <Title className="cart-title">Your Cart ({totalItems})</Title>

      {cartItems.length === 0 ? (
        <EmptyDiv className="cart-image">
          <img
            src="..\assets\images\illustration-empty-cart.svg"
            alt="Image for empty cart"
          />
          <span>Your added items will appear here</span>
        </EmptyDiv>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item._id}>
              <WrapperDiv>
                <h4 className="name">{item.name}</h4>
                <CartItemDiv>
                  <span className="quantity">{item.quantity}x</span>
                  <p className="price">
                    @ ${Number(item.price || 0).toFixed(2)}
                  </p>
                  <p className="total-price">
                    $
                    {Number((item.price || 0) * (item.quantity || 0)).toFixed(
                      2
                    )}
                  </p>
                </CartItemDiv>
              </WrapperDiv>

              <QuantityButton onClick={() => removeFromCart(item)}>
                <img
                  src="\src\assets\images\icon-remove-item.svg"
                  alt="remove item"
                />
              </QuantityButton>
            </CartItem>
          ))}
          <TotalSum>Total: ${Number(totalSum).toFixed(2)}</TotalSum>
        </div>
      )}
    </CartContainer>
  );
}

export default Cart;
