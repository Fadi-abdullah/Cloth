import './ProductCard.styles.scss';
import Button from '../button/Button';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addProduct } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addProduct(product)}>
        Add to card
      </Button>
    </div>
  );
};
export default ProductCard;
