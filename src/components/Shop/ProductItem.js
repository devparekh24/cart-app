import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { name, price, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <h3>{name}</h3>
        <p>{description}</p>
        <footer>
          <div className={classes.price}>${price.toFixed(2)}</div>
          <div className={classes.actions}>
            <button>Add to Cart</button>
          </div>
        </footer>
      </Card>
    </li>
  );
};

export default ProductItem;
