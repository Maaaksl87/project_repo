import "./App.css";
import TaskList from "./components/TaskList";
import ReactMemoList from "./components/ReactMemoList";
import { StatelessComponent } from "./components/StatelessComponent";
import UserContext from "./components/userContext";
import UserCard from "./components/UserCard";

function App() {
  const users = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 28, email: "charlie@example.com" },
  ];
  return (
    <>
      <TaskList />
      <ReactMemoList />
      <StatelessComponent name="Artur" age={22} />
      <>
        <h1>Users List</h1>
        {users.map((user, index) => (
          <UserContext.Provider key={index} value={user}>
            <UserCard />
          </UserContext.Provider>
        ))}
      </>
    </>
  );
}

export default App;
