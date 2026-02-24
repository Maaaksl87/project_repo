import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  ReactNode,
} from "react";

export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface CartActions {
  addToCart: (product: Product) => void;
  removeFromCart: (product: { _id: string }) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
}

export const CartStateContext = createContext<CartState | undefined>(undefined);
export const CartActionsContext = createContext<CartActions | undefined>(
  undefined,
);

const CART_STORAGE_KEY = "shopping_cart_items";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartState>(() => {
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

  const addToCart = useCallback((product: Product) => {
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

  const removeFromCart = useCallback((product: { _id: string }) => {
    setCartItems((prevItems) => {
      return {
        ...prevItems,
        items: prevItems.items.filter((item) => item._id !== product._id),
      };
    });
  }, []);

  const updateQuantity = useCallback((productId: string, newQuantity: number) => {
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
