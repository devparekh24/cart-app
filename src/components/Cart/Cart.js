import React, { useEffect } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../slices/uiSlice/ui-slice';

const Cart = (props) => {

  const dispatch = useDispatch()
  const isToggle = useSelector(state => state.ui.isToggle)

  useEffect(() => {
    document.body.classList.toggle('cart-open', isToggle);
    return () => {
      document.body.classList.remove('cart-open');
    };
  }, [isToggle]);

  const overlayClickHandler = () => {
    dispatch(uiActions.toggleShoppingCart())
  }

  return (
    <>
      <div className={`${classes.overlay} ${isToggle ? classes.show : ''}`} onClick={overlayClickHandler}></div>
      <div className={`${classes.confirm} ${isToggle ? classes.show : ''}`}>
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
            />
          </ul>
          <button onClick={overlayClickHandler}>Okay</button>
        </Card>
      </div>
    </>
  )
};

export default Cart;
