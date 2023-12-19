import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItem(state, action) {
            const item = action.payload
            const existingItem = state.items.find(currItem => currItem.id === item.id)
            state.totalQuantity++
            if (!existingItem) {
                state.items.push({
                    itemId: item.id,
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price,
                    name: item.name
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + item.price
            }
        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice