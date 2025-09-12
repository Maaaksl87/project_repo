import GreetingsDay from "./components/GreetingsDay";
import OutfitSelector from "./components/OutfitSelector";
import "./App.css";

function App() {
  return (
    <>
      <GreetingsDay />
      <OutfitSelector season={"літо"} />
    </>
  );
}

export default App;
