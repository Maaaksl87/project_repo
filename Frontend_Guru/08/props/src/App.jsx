import { UserProfile } from "./components/UserProfile";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <UserProfile name="Alex" age="22" email="qwerty@gmail.com" />
      <Card title="Welcome"> <p>This is the content of the card.</p> </Card>
    </>
  );
}

export default App;
