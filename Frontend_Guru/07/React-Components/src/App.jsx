import { useState } from "react";

import "./App.css";
import { ButtonClass } from "./ButtonClass";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonClass />
    </>
  );
}

export default App;
