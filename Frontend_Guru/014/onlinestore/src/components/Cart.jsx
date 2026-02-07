import React, { useMemo, useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";

const CartContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-height: 610px;
  overflow-y: auto;

  & .order-total span {
    font-size: 21px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsl(7, 20%, 60%);
    border-radius: 8px;
  }
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

  & + div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    span {
      font-weight: 700;
    }
  }
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

const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: hsl(20, 50%, 98%);
  padding: 12px;
  border-radius: 8px;
  margin: 15px 0;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 14px;

    strong {
      font-weight: 500;
    }
  }
`;

const ConfirmButton = styled.button`
  width: 100%;
  background-color: hsl(14, 86%, 42%);
  color: white;
  padding: 15px;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: hsl(14, 86%, 35%);
  }
`;

function Cart({ cartItems, removeFromCart, clearCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                      2,
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
          <div className="order-total">
            <p>Order Total</p> <span>${Number(totalSum).toFixed(2)}</span>
          </div>
          <DeliveryInfo>
            <img
              src="/src/assets/images/icon-carbon-neutral.svg"
              alt="Eco friendly"
            />
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </DeliveryInfo>
          <ConfirmButton onClick={() => setIsModalOpen(true)}>
            Confirm Order
          </ConfirmButton>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={cartItems}
        totalSum={totalSum}
        clearCart={clearCart}
      />
    </CartContainer>
  );
}

export default Cart;
