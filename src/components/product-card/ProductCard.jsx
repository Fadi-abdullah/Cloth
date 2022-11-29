import './ProductCard.styles.scss';
import Button from '../button/Button';

const ProductCard = (props) => {
  const { name, price, imageUrl } = props.product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} tag={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};
export default ProductCard;
