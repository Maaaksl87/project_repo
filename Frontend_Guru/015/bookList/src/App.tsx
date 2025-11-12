import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content>
        <h1>Це головний контент</h1>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
