import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isToggle: false
    },
    reducers: {
        toggleShoppingCart(state, action) {
            state.isToggle = !state.isToggle
        }
    }
})

export default uiSlice
export const uiActions = uiSlice.actions