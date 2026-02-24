import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  background: linear-gradient(180deg, #fff 0%, #fbfbff 100%);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(18, 23, 45, 0.06);
  max-width: 360px;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid #f1f3f5;
  background: #fff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #152238;
  margin-bottom: 4px;
`;

export const NameInput = styled.input`
  font-size: 16px;
  font-weight: 700;
  color: #152238;
  margin-bottom: 4px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 4px 8px;
  outline: none;

  &:focus {
    border-color: hsl(220, 90%, 56%);
  }
`;

export const Email = styled.div`
  font-size: 13px;
  color: #6b7280;
`;
