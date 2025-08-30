import "./App.css";
import helloElement from "./SimpleElement";
import DynamicElement from "./DynamicElement";
import ComplexElement from "./ComplexElement";

function App() {
  return (
    <div>
      {helloElement}
      {DynamicElement({ content: "Hello, Dynamic React!" })}
      {DynamicElement({ content: "Hello, One more message!" })}
      {DynamicElement({ content: "Hello, another message!" })}
      {ComplexElement()}
    </div>
  );
}

export default App;
