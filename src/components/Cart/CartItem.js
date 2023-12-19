import { cartActions } from '../../slices/cartSlice/cart-slice';
import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux'

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const addItemHandler = () => {
    const item = items.find(item => item.id === id)
    dispatch(cartActions.addItem(item))
  }

  const removeItemHandler = () => {
    const item = items.find(item => item.id === id)
    dispatch(cartActions.removeItem(item.id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
