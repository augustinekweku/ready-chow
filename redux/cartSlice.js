import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    loadCart: (state, action) => {
      state.quantity = action.payload.quantity;
      state.products = action.payload.cart;
      state.total = action.payload.total;
    },
    addProduct: (state, action) => {

      // const isAvail = state.products.find(x => x._id === action.payload._id);
      // if (!isAvail) {
          state.quantity += action.payload.quantity;
          state.products.push(action.payload);
          state.total += action.payload.price * action.payload.quantity;
          localStorage.setItem("CartQty", state.quantity);
          localStorage.setItem("readyChowCart", JSON.stringify(state.products));   
          localStorage.setItem("cartTotal", JSON.stringify(state.total));   
        // } 
      //   else{
      //     const arr1 = state.products;
      //     const newArr = arr1.map((obj) => {
      //       if (obj._id === action.payload._id) {
      //         return { ...obj, quantity: obj.quantity + action.payload.quantity, extras: action.payload.extras};
      //       }
      //       return obj;
      //     });
      //     state.products = newArr;
      //     state.quantity += action.payload.quantity;
      //     localStorage.setItem("CartQty", state.quantity);
      //     localStorage.setItem("readyChowCart", JSON.stringify(state.products));  
      // }

    },
    deleteProduct: (state, action) => {
      if (state.quantity >= 1) {
      state.products = action.payload.cart;
      state.quantity -= action.payload.productQty;
      state.total -= action.payload.productPrice ;
      localStorage.setItem("CartQty", state.quantity);
      localStorage.setItem("readyChowCart", JSON.stringify(state.products));
      localStorage.setItem("cartTotal", state.total);
      }
    },
    increaseCart: (state, action) => {
      // const arr1 = state.products;
      // const newArr = arr1.map((obj) => {
      //   if (obj._id === action.payload._id) {
      //     return { ...obj, quantity: obj.quantity + 1};
      //   }
      //   return obj;
      // });
      state.products = action.payload.cart;
      state.quantity += 1;
      state.total =action.payload.total; 
      localStorage.setItem("CartQty", state.quantity);
      localStorage.setItem("readyChowCart", JSON.stringify(state.products));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));   

      
    },
    decreaseCart: (state, action) => {
      if (state.quantity > 1) {
        state.products = action.payload.cart;
        state.quantity -= 1;
        state.total =action.payload.total; 
        localStorage.setItem("CartQty", state.quantity);
        localStorage.setItem("readyChowCart", JSON.stringify(state.products));
        localStorage.setItem("cartTotal", JSON.stringify(state.total));  
      }
    },
    reset: (state) => {
      state = state.initialState;
      localStorage.setItem("CartQty", null);
    },
  },
});

export const { addProduct, reset, increaseCart, decreaseCart, deleteProduct, loadCart } = cartSlice.actions;
export default cartSlice.reducer;
