import { Link, Outlet } from 'react-router-dom';
import './Nav.styles.scss';

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/auth">Sign Up</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Nav;
