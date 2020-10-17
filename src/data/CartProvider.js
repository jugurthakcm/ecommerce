import React, { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ cartReducer, children, initialCart }) => (
  <CartContext.Provider value={useReducer(cartReducer, initialCart)}>
    {children}
  </CartContext.Provider>
);

export const useCartContext = () => useContext(CartContext);
