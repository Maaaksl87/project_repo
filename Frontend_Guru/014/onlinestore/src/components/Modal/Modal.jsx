import { useCartState, useCartActions } from "../../store/shopping-cart-context";
import * as S from "./Modal.styled";

function Modal({ isOpen, onClose, totalSum }) {
  const { items } = useCartState();
  const { clearCart } = useCartActions();

  if (!isOpen) return null;

  const handleStartNewOrder = () => {
    clearCart();
    onClose();
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.SuccessIcon>
          <img src="/src/assets/images/icon-check.svg" alt="Success" />
        </S.SuccessIcon>
        <S.ModalHeader>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </S.ModalHeader>

        <S.OrderSummary>
          {items.map((item) => (
            <div key={item._id} className="item">
              <img src={item.image.thumbnail} alt={item.name} />
              <div className="item-details">
                <div>{item.name}</div>
                <span className="quantity">
                  {item.quantity}x @ ${item.price.toFixed(2)}
                </span>
              </div>
              <div className="price">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="total">
            <span>Order Total</span>
            <span>${totalSum.toFixed(2)}</span>
          </div>
        </S.OrderSummary>

        <S.StartNewOrderButton onClick={handleStartNewOrder}>
          Start New Order
        </S.StartNewOrderButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}

export default Modal;
