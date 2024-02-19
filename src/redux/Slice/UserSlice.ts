import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    role: "customer",
    user: {},
  },
  reducers: {
    
  }
});

export default authSlice.reducer;