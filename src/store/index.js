import { configureStore } from '@reduxjs/toolkit'
import uiSlice from '../slices/uiSlice/ui-slice'
import cartSlice from '../slices/cartSlice/cart-slice'

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store