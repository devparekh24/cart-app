import { uiActions } from '../../slices/uiSlice/ui-slice';
import { useDispatch } from 'react-redux'
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dipatch = useDispatch()

  const toggleHandler = () => {
    dipatch(uiActions.toggleShoppingCart())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
