import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartProducts: [],
  setCartProducts: () => {},
  addProduct: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (product) => {
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (existingProduct) {
      const newCartProducts = cartProducts.map((cartProduct) =>
        cartProduct.id === product.id
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct
      );
      return setCartProducts(newCartProducts);
    }

    return setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
  };

  const value = { isCartOpen, setIsCartOpen, cartProducts, addProduct };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
