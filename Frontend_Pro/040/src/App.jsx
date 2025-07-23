import React, { Suspense, useState } from "react";
import "./App.scss";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default function App() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div className="app">
      <h1>Завдання 6, SASS і код-сплітінг з Parcel</h1>
      <button onClick={() => setShowLazy(true)}>
        Показати компонент
      </button>

      <Suspense fallback={<div>Завантаження...</div>}>
        {showLazy && <LazyComponent />}
      </Suspense>
    </div>
  );
}
