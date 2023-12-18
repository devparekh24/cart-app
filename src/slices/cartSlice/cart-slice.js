import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItem(state, action) { 
            const item = action.payload
        },
        removeItem(state, action) { }
    }
})

export default cartSlice.actions
export const { addItem, removeItem } = cartSlice.reducer