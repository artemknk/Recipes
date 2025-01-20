import { createSlice } from "@reduxjs/toolkit";
import { loginBuilder } from "./chunk";

export const initialState = {
  user: null,
  error: null,
  loading: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  selectors: {
    getUserState: (state) => state.user,
    getUserLoadingState: (state) => state.loading
  },
  extraReducers: loginBuilder
})

export default userSlice.reducer
export const { getUserState, getUserLoadingState } = userSlice.selectors