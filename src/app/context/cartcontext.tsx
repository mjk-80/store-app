"use client";
import { createContext, useContext, useState } from "react";

interface ICartItems {
  id: number;
  qty: number;
}

interface ICartContext {
  cartItem: ICartItems[];
  handleIncrease: (id: number) => void;
  handleDecrease: (id: number) => void;
  getProductQty: (id: number) => number;
  cartTotalQty: number;
}

export const CartContext = createContext({} as ICartContext);

export const useCart = () => {
  return useContext(CartContext);
};

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItem, setCartItem] = useState<ICartItems[]>([]);

  const cartTotalQty = cartItem.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const getProductQty = (id: number) => {
    return cartItem.find((item) => item.id == id)?.qty || 0;
  };

  const handleIncrease = (id: number) => {
    setCartItem((prevState) => {
      const isNotExist = prevState.find((item) => item.id == id) == null;

      if (isNotExist) {
        return [...prevState, { id: id, qty: 1 }];
      } else {
        return prevState.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecrease = (id: number) => {
    setCartItem((prevState) => {
      return prevState.map((item) => {
        if (item.id == id) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        handleIncrease,
        getProductQty,
        handleDecrease,
        cartTotalQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
