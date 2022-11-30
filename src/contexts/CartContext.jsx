import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartProducts: [],
  setCartProducts: () => {},
  addProduct: () => {},
  decreaseQuantity: () => {},
  increaseQuantity: () => {},
  deleteProduct: () => {},
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

  const decreaseQuantity = (id) => {
    const newProductsQuantity = cartProducts.map((product) => {
      const { quantity } = product;
      return product.id === id
        ? quantity > 0
          ? { ...product, quantity: quantity - 1 }
          : product
        : product;
    });
    setCartProducts(newProductsQuantity);
  };

  const increaseQuantity = (id) => {
    const newProductsQuantity = cartProducts.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCartProducts(newProductsQuantity);
  };

  const deleteProduct = (id) => {
    const newProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newProducts);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartProducts,
    addProduct,
    decreaseQuantity,
    increaseQuantity,
    deleteProduct,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
