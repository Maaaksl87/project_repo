import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const Card = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  background: linear-gradient(180deg, #fff 0%, #fbfbff 100%);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(18, 23, 45, 0.06);
  max-width: 360px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid #f1f3f5;
  background: #fff;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #152238;
  margin-bottom: 4px;
`;

const NameInput = styled.input`
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

const Email = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

function UserProfile({ name, email, avatarUrl, isEditing, onNameChange }) {
  const fallback =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect rx='12' width='100%' height='100%' fill='%23E6EEF8'/><text x='50%' y='50%' font-size='20' text-anchor='middle' fill='%23304B6A' dy='.35em'>U</text></svg>`
    );

  const [editValue, setEditValue] = useState(name);

  useEffect(() => {
    if (isEditing) {
      setEditValue(name);
    }
  }, [isEditing, name]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onNameChange(editValue);
    } else if (e.key === "Escape") {
      setEditValue(name);
      onNameChange(name);
    }
  };

  return (
    <Card>
      <Avatar src={avatarUrl || fallback} alt={name} />
      <Info>
        {isEditing ? (
          <NameInput
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => onNameChange(editValue)}
            autoFocus
          />
        ) : (
          <Name>{name}</Name>
        )}
        <Email>{email}</Email>
      </Info>
    </Card>
  );
}

export default UserProfile;
