import { useState } from "react";

import "./App.css";
import { ButtonClass } from "./ButtonClass";
import { AlertComponent } from "./Alert";
function App() {
  return (
    <>
      <ButtonClass />
      <AlertComponent message="qwerty" type="error"/>
    </>
  );
}

export default App;
