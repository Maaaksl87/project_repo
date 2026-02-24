import styled from "styled-components";

export const CartContainer = styled.div`
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

export const Title = styled.h2`
  text-align: left;
  font-size: 18px;
  color: hsl(14, 86%, 42%);
  font-weight: 700;
  margin-bottom: 20px;
`;

export const EmptyDiv = styled.div`
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

export const CartItem = styled.div`
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

export const WrapperDiv = styled.div`
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

export const CartItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  border-radius: 50%;
  border: hsl(7, 20%, 60%) 1px solid;
  width: 16px;
  padding: 3px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.increment {
    background-color: #fff;
    color: hsl(14, 86%, 42%);
  }
`;

export const DeliveryInfo = styled.div`
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

export const ConfirmButton = styled.button`
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
