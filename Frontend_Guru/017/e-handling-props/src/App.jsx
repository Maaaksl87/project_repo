import "./App.css";
import TextInputForm from "./components/TextInputForm";

function App() {
  function handleReceiveText(text) {
    alert(text);
  }

  return (
    <>
      <TextInputForm handleReceiveText={handleReceiveText}/>
    </>
  );
}

export default App;
