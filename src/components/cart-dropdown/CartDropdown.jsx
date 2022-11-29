import './CartDropdown.styles.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartDropdown = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProducts.map((product) => (
          <CartItem key={product.id} cartItem={product} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};
export default CartDropdown;
