import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  user: null,
  token: null,
  clientId: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const  token  = action.payload;
      state.token = token;
    },
    setClientId: (state, action) => {
      state.clientId = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.clientId = null;
    },
  },
});

export const { setToken, logout, setClientId } = authSlice.actions;

export default authSlice.reducer;