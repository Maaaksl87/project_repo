import { useState } from "react";
import { styled } from "styled-components";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const Title = styled.div`
  text-align: left;
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // перевірка чи існує конкретний товар в кошику
      const existingItem = prevItems.find((item) => item._id === product._id);

      if (existingItem) {
        // якщо товар вже є в кошику, то
        return prevItems.map(
          (
            item // для кожного товару перевіряємо чи це той, що потрібно оновити
          ) =>
            item._id === product._id // якщо це той самий товар,
              ? { ...item, quantity: item.quantity + 1 } //то міняємо його інформацію та додаємо кількість
              : item // якщо це не той товар, повертаємо без змін
        );
      }
      return [...prevItems, { ...product, quantity: 1 }]; // якщо товару немає в кошику, додаємо його з кількістю 1
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item._id !== product._id);
    });
  };

  const updateQuantity = (product, newQuantity) => {
    setCartItems((prevItems) => {
      if (newQuantity <= 0) {
        // Якщо кількість 0 або менше - залишаємо 0
        return prevItems.map((item) =>
          item._id === product._id ? { ...item, quantity: 0 } : item
        );
      }
      // інакше оновлюємо кількість
      return prevItems.map((item) =>
        item._id === product._id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    <div className="app">
      <div>
        <Title>Desserts</Title>
        <ProductList addToCart={addToCart} cartItems={cartItems} />
      </div>
      <div>
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
}

export default App;
