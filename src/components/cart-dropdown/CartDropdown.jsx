import './CartDropdown.styles.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartDropdown = () => {
  const { cartProducts, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutPage = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProducts.map((product) => (
          <CartItem key={product.id} cartItem={product} />
        ))}
      </div>
      <Button onClick={checkoutPage}>Go To Checkout</Button>
    </div>
  );
};
export default CartDropdown;
