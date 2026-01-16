import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of cart items: { id, name, price, image, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart (required: addItem)
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // Remove item from cart completely (required: removeItem)
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // Update item quantity (required: updateQuantity)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          // If quantity is 0 or less, remove the item
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },

    // Additional helper functions for convenience
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // If quantity is 1, remove the item
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { 
  addItem,
  removeItem,
  updateQuantity,
  increaseQuantity, 
  decreaseQuantity, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;
