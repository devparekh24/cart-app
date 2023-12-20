import Card from '../UI/Card/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux'
import { cartActions } from '../../slices/cartSlice/cart-slice'

const ProductItem = (props) => {
  const { name, price, description, id } = props;
  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(cartActions.addItem({
      id,
      price,
      name,
      description
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <h3>{name}</h3>
        <p>{description}</p>
        <footer>
          <div className={classes.price}>${price.toFixed(2)}</div>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </footer>
      </Card>
    </li>
  );
};

export default ProductItem;
