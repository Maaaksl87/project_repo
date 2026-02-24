import "./App.css";
import ProductContainer from "../ProductContainer/ProductContainer";
import Cart from "../Cart/Cart";
import UserContainer from "../UserContainer/UserContainer";
import { CartProvider } from "../../store/shopping-cart-context";
import * as S from "./App.styled";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <div>
          <S.AppTitle>Desserts</S.AppTitle>
          <UserContainer />
          <ProductContainer />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
