import "./App.css";
import { ButtonClass } from "./components/ButtonClass";
import { AlertComponent } from "./components/Alert";
import { AppComponent } from "./components/AppComponent";
function App() {
  return (
    <>
      <ButtonClass />
      <AlertComponent message="qwerty" type="error" />
      <AppComponent />
    </>
  );
}

export default App;
