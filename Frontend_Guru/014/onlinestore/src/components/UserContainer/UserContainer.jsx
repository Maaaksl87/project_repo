import { useState } from "react";
import UserProfile from "../UserProfile/UserProfile";
import * as S from "./UserContainer.styled";

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
    <S.Wrapper>
      <UserProfile
        name={user.name}
        email={user.email}
        avatarUrl={user.avatarUrl}
        isEditing={isEditing}
        onNameChange={handleNameChange}
      />
      <S.ChangeButton onClick={() => setIsEditing(true)}>
        {isEditing ? "Save" : "Change Name"}
      </S.ChangeButton>
    </S.Wrapper>
  );
}

export default UserContainer;
