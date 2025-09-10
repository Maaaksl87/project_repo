import "./App.css";
import TaskList from "./components/TaskList";
import ReactMemoList from "./components/ReactMemoList";
import { StatelessComponent } from "./components/StatelessComponent";

function App() {
  return (
    <>
      <TaskList />
      <ReactMemoList />
      <StatelessComponent name="Artur" age={22} />
    </>
  );
}

export default App;
