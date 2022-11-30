import './CheckoutProduct.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CheckoutProduct = ({ product }) => {
  const { name, imageUrl, quantity, price, id } = product;

  const { decreaseQuantity, increaseQuantity, deleteProduct } =
    useContext(CartContext);

  return (
    <div className="checkout-product-container">
      <img src={imageUrl} alt={`${name}`} />
      <span>{name}</span>
      <div className="quantity-controllers">
        <button onClick={() => decreaseQuantity(id)}>&#10094;</button>
        <span>{quantity}</span>
        <button onClick={() => increaseQuantity(id)}>&#10095;</button>
      </div>
      <span>{`${price} $`}</span>
      <span>{`${price * quantity} $`}</span>
      <span className="deleteProduct" onClick={() => deleteProduct(id)}>
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutProduct;
