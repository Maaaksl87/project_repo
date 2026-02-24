import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const ChangeButton = styled.button`
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  background-color: hsl(220, 90%, 56%);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.16s;

  &:hover {
    background-color: hsl(220, 90%, 46%);
  }
`;
