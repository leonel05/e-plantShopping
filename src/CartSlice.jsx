import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
        totalProductToCart: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if(existingItem){
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1})
            }
            state.totalProductToCart++;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
            state.totalProductToCart -= state.items.find(item => item.name === name).quantity;
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if(itemToUpdate){
                state.totalProductToCart += quantity - itemToUpdate.quantity;
                console.log(quantity - itemToUpdate.quantity);
                console.log(state.totalProductToCart + quantity - itemToUpdate.quantity);
                itemToUpdate.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
