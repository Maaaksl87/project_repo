import { UserProfile } from "./components/UserProfile";
import { Card } from "./components/Card";
import { Toggle } from "./components/Toggle/Toggle";
import { TemperatureConverter } from "./components/TemperatureConverter";
import "./App.css";

function App() {
  return (
    <>
      <UserProfile name="Alex" age="22" email="qwerty@gmail.com" />
      <Card title="Welcome">This is the content of the card. </Card>
      <Toggle />
      <TemperatureConverter />
    </>
  );
}

export default App;
