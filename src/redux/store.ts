import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/UserSlice";
import cartSlice from "./Slice/CartSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
});
