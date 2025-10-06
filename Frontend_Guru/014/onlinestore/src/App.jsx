import { styled } from "styled-components";
import "./App.css";
import ProductList from "./components/ProductList";

const Title = styled.div`
  text-align: left;
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

function App() {
  return (
    <div className="app">
      <Title>Desserts</Title>
      <ProductList />
    </div>
  );
}

export default App;
