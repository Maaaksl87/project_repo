import React, { useState } from "react";
import { styled } from "styled-components";
import UserProfile from "./UserProfile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

// Стилизована кнопка для зміни імені
const ChangeButton = styled.button`
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

function UserContainer() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (newName) => {
    if (newName.trim()) {
      setUser((prev) => ({
        ...prev,
        name: newName,
      }));
    }
    setIsEditing(false);
  };

  return (
    <Wrapper>
      <UserProfile
        name={user.name}
        email={user.email}
        avatarUrl={user.avatarUrl}
        isEditing={isEditing}
        onNameChange={handleNameChange}
      />
      <ChangeButton onClick={() => setIsEditing(true)}>
        {isEditing ? "Save" : "Change Name"}
      </ChangeButton>
    </Wrapper>
  );
}

export default UserContainer;
