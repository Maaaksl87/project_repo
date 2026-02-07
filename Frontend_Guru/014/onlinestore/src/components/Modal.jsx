import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsl(7, 20%, 60%);
    border-radius: 8px;
  }
`;

const SuccessIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: hsl(156, 100%, 95%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 24px;

  h2 {
    color: hsl(12, 20%, 16%);
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    color: hsl(12, 20%, 44%);
    font-size: 14px;
  }
`;

const OrderSummary = styled.div`
  margin: 24px 0;
  backgrpund-color: hsl(20, 50%, 98%);

  .item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 12px 0;
    color: hsl(12, 20%, 16%);
    font-size: 14px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      object-fit: cover;
    }

    .item-details {
      flex: 1;
      text-align: left;
    }

    .quantity {
      color: hsl(7, 20%, 60%);
      font-weight: 500;
    }

    .price {
      text-align: right;
      font-weight: 700;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid hsl(12, 20%, 95%);
    font-size: 16px;
    font-weight: 700;
    color: hsl(12, 20%, 16%);
  }
`;

const StartNewOrderButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: hsl(14, 86%, 42%);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: hsl(14, 86%, 35%);
  }
`;

function Modal({ isOpen, onClose, cartItems, totalSum, clearCart }) {
  if (!isOpen) return null;

  const handleStartNewOrder = () => {
    clearCart();
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <SuccessIcon>
          <img src="/src/assets/images/icon-check.svg" alt="Success" />
        </SuccessIcon>
        <ModalHeader>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </ModalHeader>

        <OrderSummary>
          {cartItems.map((item) => (
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
        </OrderSummary>

        <StartNewOrderButton onClick={handleStartNewOrder}>
          Start New Order
        </StartNewOrderButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
