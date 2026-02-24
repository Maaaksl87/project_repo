import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";
import * as S from "./UserProfile.styled";

interface UserProfileProps {
  name: string;
  email: string;
  avatarUrl: string;
  isEditing: boolean;
  onNameChange: (newName: string) => void;
}

function UserProfile({ name, email, avatarUrl, isEditing, onNameChange }: UserProfileProps) {
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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onNameChange(editValue);
    } else if (e.key === "Escape") {
      setEditValue(name);
      onNameChange(name);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  return (
    <S.Card>
      <S.Avatar src={avatarUrl || fallback} alt={name} />
      <S.Info>
        {isEditing ? (
          <S.NameInput
            value={editValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={() => onNameChange(editValue)}
            autoFocus
          />
        ) : (
          <S.Name>{name}</S.Name>
        )}
        <S.Email>{email}</S.Email>
      </S.Info>
    </S.Card>
  );
}

export default UserProfile;
