import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



const rootReducer = combineReducers({
    cart: cartReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });

export default store;
