import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        changed: false
    },
    reducers: {
        addItem(state, action) {
            const item = action.payload
            const existingItem = state.items.find(currItem => currItem.id === item.id)
            state.totalQuantity++
            state.changed = true
            if (!existingItem) {
                state.items.push({
                    id: item.id,
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price,
                    name: item.name
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + item.price
            }

            state.totalAmount = state.items.map((item) => {
                return state.totalAmount = item.totalPrice
            }).reduce((acc, curr) => {
                return acc += curr
            }, 0)
        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            state.changed = true
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
            state.totalAmount = state.items.map((item) => {
                return state.totalAmount = item.totalPrice
            }).reduce((acc, curr) => {
                return acc += curr
            }, 0)
        },
        replaceCart(state, action) {
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
            state.totalAmount = action.payload.totalAmount
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice