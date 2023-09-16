"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();
let foundProduct;
let index;

export const StateContext = ({ children }) => {
  const ls = typeof Window != "undefined" ? localStorage : {};
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const updatedCart = cartItems.filter((item) => item.id !== product.id);

    setTotalQuantities(
      (prevTotalQuanties) => prevTotalQuanties - foundProduct.quantity
    );
    setCartItems(updatedCart);
  };
  const toogleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);
    if (value === "inc") {
      foundProduct.quantity += 1;
      cartItems[index] = foundProduct;
      setCartItems(cartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuanties) => prevTotalQuanties + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        cartItems[index] = foundProduct;
        setCartItems(cartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuanties) => prevTotalQuanties - 1);
      }
    }
  };
  const onAdd = (product, quantity) => {
    const isInCart = cartItems.find((item) => item.id == product.id);
    setTotalQuantities((prevTotalQuanties) => prevTotalQuanties + quantity);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);

    if (isInCart) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else {
          return { ...item };
        }
      });
      setCartItems(updatedCart);
      // return;
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };
  return (
    <Context.Provider
      value={{
        onAdd,
        onRemove,
        cartItems,
        showCart,
        totalPrice,
        setTotalPrice,
        setShowCart,
        setCartItems,
        totalQuantities,
        setTotalQuantities,
        toogleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
