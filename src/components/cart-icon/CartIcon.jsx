import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartIcon = ({ toggle }) => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartProducts.reduce((total, product) => total + product.quantity, 0)}
      </span>
    </div>
  );
};
export default CartIcon;
