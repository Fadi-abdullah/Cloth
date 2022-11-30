import './Checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutProduct from '../../components/checkout-product/CheckoutProduct';

const Checkout = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-product-container">
        <h3>Image</h3>
        <h3>Name</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>
        <h3>Total Price</h3>
      </div>

      {cartProducts.map((product) => (
        <CheckoutProduct product={product} key={product.id} />
      ))}

      <div className="total-container">
        <div>
          <span>Total</span>
          <span>
            {`${cartProducts.reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )} $`}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
