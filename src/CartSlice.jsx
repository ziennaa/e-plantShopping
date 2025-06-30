import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      // push the new item with quantity = 1
      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        item => item.name !== action.payload.name
      );
    },
    updateQuantity(state, action) {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) item.quantity = quantity;
    },
  }
});
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
