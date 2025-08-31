import "./App.css";
import { ButtonClass } from "./components/ButtonClass";
import { AlertComponent } from "./components/Alert";
import { AppComponent } from "./components/AppComponent";
import { StyledButton } from "./components/StyledButton";
import { Person } from "./components/Person";
import {Calculator} from "./components/Calculator";
function App() {
  return (
    <>
      <ButtonClass />
      <AlertComponent message="qwerty" type="error" />
      <AppComponent />
      <StyledButton text={"This is 4 task"} />
      <Person name={"Ali"} age={22} residence={"USA"}/>
      <Calculator />
    </>
  );
}

export default App;
