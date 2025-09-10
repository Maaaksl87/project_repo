import { useContext } from "react";
import UserContext from "./userContext";

const UserCard = () => {
  const user = useContext(UserContext); // беермо данні з контексту

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.age}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
