import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from './slices/uiSlice/ui-slice';
import Notification from './components/UI/Notification/Notification'

let isInitial = true

function App() {

  const isToggle = useSelector(state => state.ui.isToggle)
  const isNotification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {

    const sentCartData = async () => {

      dispatch(uiActions.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))

      const res = await fetch('https://redux-cart-app-25cba-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      if (!res.ok) {
        throw new Error('Sending cart data failed!')
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Item added Successfully...!'
      }))
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sentCartData().catch((err) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Something went wrong!'
      }))
    })

    setTimeout(() => {
      dispatch(uiActions.hideNotification())
    }, 1500)
  }, [cart, dispatch])

  return (
    <Fragment>
      {
        isNotification && <Notification status={isNotification.status} title={isNotification.title} message={isNotification.message} />
      }
      <Layout>
        {isToggle &&
          <Cart />
        }
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
