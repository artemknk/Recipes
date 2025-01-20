import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api";


export const loginUserChunk = createAsyncThunk(
  "login/LoginUser",
  (data) => api.loginUser(data)
)


export const loginBuilder = (builder) => {
  builder.addCase(loginUserChunk.pending, (state) => {
    state.loading = true;
    state.error = null;
  }).addCase(loginUserChunk.fulfilled, (state, action) => {
    state.user = action.payload;
    localStorage.setItem('token', action.payload.accessToken);
    state.loading = false;
  }).addCase(loginUserChunk.rejected, (state, action) => {
    state.error = action.error.message;
    state.loading = false;
  })
}