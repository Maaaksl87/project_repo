import { styled } from "styled-components";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart"

const Title = styled.div`
  text-align: left;
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;

function App() {
  return (
    <div className="app">
      <div>
        <Title>Desserts</Title>
        <ProductList />
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  );
}

export default App;
