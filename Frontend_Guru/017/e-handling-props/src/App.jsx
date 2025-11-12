import "./App.css";
import TextInputForm from "./components/TextInputForm";
import ItemList from "./components/ItemList";

function App() {
  function handleReceiveText(text) {
    alert(text);
  }

  function handleIdReturn(id) {
    console.log(id);
  }

  return (
    <>
      <TextInputForm handleReceiveText={handleReceiveText} />
      <ItemList handleIdReturn={handleIdReturn} />
    </>
  );
}

export default App;
