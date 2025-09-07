import { UserProfile } from "./components/UserProfile";
import { Card } from "./components/Card";
import { Toggle } from "./components/Toggle/Toggle";
import { TemperatureConverter } from "./components/TemperatureConverter";
import { UserList } from "./components/UserList";
import "./App.css";

function App() {
  return (
    <>
      <UserProfile name="Alex" age="22" email="qwerty@gmail.com" />
      <Card title="Welcome">This is the content of the card. </Card>
      <Toggle />
      <TemperatureConverter />
      <UserList
        users={[
          { id: 1, name: "Alex", age: 22, email: "alex@gmail.com" },
          { id: 2, name: "John", age: 25, email: "john@gmail.com" },
          { id: 3, name: "Maria", age: 20, email: "maria@gmail.com" },
        ]}
      />
    </>
  );
}

export default App;
