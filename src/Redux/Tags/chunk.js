import { createAsyncThunk } from "@reduxjs/toolkit"; // функция для создания асинзронных thunks (переходов, действий)
import { api } from "../../Api";

// thunk для получения тегов

export const getTagsChunk = createAsyncThunk(
  "tags/getTags",
  () => api.getAllRecipesTags()
)

export const tagBuilder = (builder) => {
  builder.addCase(getTagsChunk.pending, (state) => {
    state.loading = true;
    state.error = null;
  }).addCase(getTagsChunk.fulfilled, (state, action) => {
    state.tags = action.payload;
    state.loading = false;
  }).addCase(getTagsChunk.rejected, (state, action) => {
    state.error = action.error.message;
    state.loading = false;
    state.tags = [];
  })
}