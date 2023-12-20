import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux'

function App() {
  const isToggle = useSelector(state => state.ui.isToggle)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    fetch('https://redux-cart-app-25cba-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart)
    })
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
