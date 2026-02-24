import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";

export const CartStateContext = createContext();
export const CartActionsContext = createContext();

const CART_STORAGE_KEY = "shopping_cart_items";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : { items: [] };
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      return { items: [] };
    }
  });

  // Збереження в localStorage при кожній зміні cartItems
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.items.find(
        (item) => item._id === product._id,
      );

      if (existingItem) {
        return {
          ...prevItems,
          items: prevItems.items.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...prevItems,
        items: [...prevItems.items, { ...product, quantity: 1 }],
      };
    });
  }, []);

  const removeFromCart = useCallback((product) => {
    setCartItems((prevItems) => {
      return {
        ...prevItems,
        items: prevItems.items.filter((item) => item._id !== product._id),
      };
    });
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    setCartItems((prevItems) => {
      if (newQuantity <= 0) {
        return {
          ...prevItems,
          items: prevItems.items.filter((item) => item._id !== productId),
        };
      }
      return {
        ...prevItems,
        items: prevItems.items.map((item) =>
          item._id === productId ? { ...item, quantity: newQuantity } : item,
        ),
      };
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems({ items: [] });
  }, []);

  const stateValue = useMemo(
    () => ({ items: cartItems.items }),
    [cartItems.items],
  );

  const actionsValue = useMemo(
    () => ({
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [addToCart, removeFromCart, updateQuantity, clearCart],
  );

  return (
    <CartStateContext.Provider value={stateValue}>
      <CartActionsContext.Provider value={actionsValue}>
        {children}
      </CartActionsContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
}

export function useCartActions() {
  const context = useContext(CartActionsContext);
  if (context === undefined) {
    throw new Error("useCartActions must be used within a CartProvider");
  }
  return context;
}
