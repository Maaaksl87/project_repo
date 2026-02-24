import { useState, useEffect } from "react";
import * as S from "./UserProfile.styled";

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
    <S.Card>
      <S.Avatar src={avatarUrl || fallback} alt={name} />
      <S.Info>
        {isEditing ? (
          <S.NameInput
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
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
