import { useMemo, useState } from "react";
import Modal from "../Modal/Modal";
import { useCartState, useCartActions, CartItem } from "../../store/shopping-cart-context";
import * as S from "./Cart.styled";

function Cart() {
  const { items } = useCartState();
  const { removeFromCart } = useCartActions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { totalItems, totalSum } = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        totalItems: acc.totalItems + item.quantity,
        totalSum: acc.totalSum + item.price * item.quantity,
      }),
      { totalItems: 0, totalSum: 0 },
    );
  }, [items]);

  return (
    <S.CartContainer>
      <S.Title className="cart-title">Your Cart ({totalItems})</S.Title>

      {items.length === 0 ? (
        <S.EmptyDiv className="cart-image">
          <img
            src="/src/assets/images/illustration-empty-cart.svg"
            alt="Image for empty cart"
          />
          <span>Your added items will appear here</span>
        </S.EmptyDiv>
      ) : (
        <div>
          {items.map((item: CartItem) => (
            <S.CartItem key={item._id}>
              <S.WrapperDiv>
                <h4 className="name">{item.name}</h4>
                <S.CartItemDiv>
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
                </S.CartItemDiv>
              </S.WrapperDiv>

              <S.QuantityButton onClick={() => removeFromCart(item)}>
                <img
                  src="/src/assets/images/icon-remove-item.svg"
                  alt="remove item"
                />
              </S.QuantityButton>
            </S.CartItem>
          ))}
          <div className="order-total">
            <p>Order Total</p> <span>${Number(totalSum).toFixed(2)}</span>
          </div>
          <S.DeliveryInfo>
            <img
              src="/src/assets/images/icon-carbon-neutral.svg"
              alt="Eco friendly"
            />
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </S.DeliveryInfo>
          <S.ConfirmButton onClick={() => setIsModalOpen(true)}>
            Confirm Order
          </S.ConfirmButton>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalSum={totalSum}
      />
    </S.CartContainer>
  );
}

export default Cart;
