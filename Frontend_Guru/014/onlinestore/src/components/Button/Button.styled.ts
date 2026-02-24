import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  color: black;
  border-radius: 20px;
  border: 1px solid grey;
  padding: 10px 25px;
  gap: 8px;
  width: 150px;
  cursor: pointer;

  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    border-color: hsl(14, 86%, 42%);
    color: hsl(14, 86%, 42%);
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(14, 86%, 42%);
  color: #fff;
  border-radius: 20px;
  border: 1px solid grey;
  padding: 10px;
  width: 150px;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const QuantityButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: hsl(14, 86%, 42%);
  }
`;
