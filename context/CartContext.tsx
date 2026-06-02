"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: number;  // ← change to number
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
  section: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
   removeFromCart: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.size === item.size
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number, size: string) => {  // ← number
  setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
};

const updateQuantity = (id: number, size: string, quantity: number) => {  // ← number
  if (quantity < 1) return removeFromCart(id, size);
  setItems((prev) =>
    prev.map((i) =>
      i.id === id && i.size === size ? { ...i, quantity } : i
    )
  );
};
  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}