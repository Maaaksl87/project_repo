import "./App.css";
import { ButtonClass } from "./components/ButtonClass";
import { AlertComponent } from "./components/Alert";
import { AppComponent } from "./components/AppComponent";
import { StyledButton } from "./components/StyledButton";
function App() {
  return (
    <>
      <ButtonClass />
      <AlertComponent message="qwerty" type="error" />
      <AppComponent />
      <StyledButton text={"This is 4 task"} />
    </>
  );
}

export default App;
