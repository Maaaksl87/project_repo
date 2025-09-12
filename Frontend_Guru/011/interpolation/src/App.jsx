import "./App.css";
import { DynamicText } from "./components/DynamicText";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <DynamicText />
      <Greeting userName='Alice'/>
    </>
  );
}

export default App;
