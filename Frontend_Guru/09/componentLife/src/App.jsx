import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import FetchData from "./components/FetchData";
import ErrorBoundary from "./components/ErrorBoundary";
import Logger from "./components/Logger";

function App() {
  const [show, setShow] = useState(true);
  const [userId, setUserId] = useState(1);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Прибрати таймер" : <Timer />}
      </button>
      {show && <Timer />}

      <ErrorBoundary>
        <button onClick={() => setUserId((id) => id + 1)}>
          Завантажити наступного користувача
        </button>
        <Logger>
          <FetchData userId={userId} />
        </Logger>
      </ErrorBoundary>
    </div>
  );
}

export default App;
