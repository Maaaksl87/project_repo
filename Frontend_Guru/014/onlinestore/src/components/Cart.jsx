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

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
            <div
              key={item._id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={item.image.desktop}
                  alt={item.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                />
                <div>
                  <h4>{item.name}</h4>
                  <p>${Number(item.price).toFixed(2)}</p>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
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
              </div>
            </div>
          ))}
        </div>
      )}
    </CartContainer>
  );
}

export default Cart;
