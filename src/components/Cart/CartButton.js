import { uiActions } from '../../slices/uiSlice/ui-slice';
import { useDispatch, useSelector } from 'react-redux'
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dipatch = useDispatch()
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const toggleHandler = () => {
    dipatch(uiActions.toggleShoppingCart())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
