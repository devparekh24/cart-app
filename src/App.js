import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux'

function App() {
  const isToggle = useSelector(state => state.ui.isToggle)
  const cart = useSelector(state => state.cart)

  useEffect(() => {

    const sentCartData = async () => {

      const res = await fetch('https://redux-cart-app-25cba-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      if (!res.ok) {
        throw new Error('Sending cart data failed!')
      }

      resData = await res.json()
    }

  }, [cart])

  return (
    <Layout>
      {isToggle &&
        <Cart />
      }
      <Products />
    </Layout>
  );
}

export default App;
