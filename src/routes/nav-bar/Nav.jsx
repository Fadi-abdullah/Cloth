import './Nav.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { signOutUser } from '../../utilz/firebase/firebase';

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggle = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          {currentUser ? (
            <Link to="/" onClick={signOutUser}>
              Sign out
            </Link>
          ) : (
            <Link to="/auth">Sign Up</Link>
          )}
          <CartIcon toggle={toggle} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default Nav;
