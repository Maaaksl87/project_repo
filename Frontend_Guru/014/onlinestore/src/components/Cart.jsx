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
  align-items: center;
  gap: 10px;

  p {
    color: hsl(7, 20%, 60%);
  }
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

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  // мемоізований розрахунок, перераховується тільки при зміні cartItems
  const { totalItems, totalSum } = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => ({
        totalItems: acc.totalItems + item.quantity,
        totalSum: acc.totalSum + (item.price * item.quantity)
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
                <img
                  src={item.image?.desktop || item.image}
                  alt={item.name || 'Product'}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                />
                <div>
                  <h4>{item.name}</h4>
                  <p>${Number(item.price || 0).toFixed(2)}</p>
                  <p>${Number((item.price || 0) * (item.quantity || 0)).toFixed(2)}</p>
                </div>
              </WrapperDiv>

              <WrapperDiv>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item)}>X</button>
              </WrapperDiv>
            </CartItem>
          ))}
          <TotalSum>Total: ${Number(totalSum).toFixed(2)}</TotalSum>
        </div>
      )}
    </CartContainer>
  );
}

export default Cart;
