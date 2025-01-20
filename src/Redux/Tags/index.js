import { createSlice } from "@reduxjs/toolkit";
import { tagBuilder } from "./chunk";

export const initialState = {
  tags: [],
  error: null,
  loading: false,
  currentTag: null,
  headerTag: 'Recipe App',
}

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setCurrentTag: (state, action) => {
      state.headerTag = action.payload
      state.currentTag = action.payload
    }
  },
  selectors: {
    getTagsState: (state) => state.tags,
    getTagsLoadingState: (state) => state.loading,
  },
  extraReducers: tagBuilder
})

export default tagsSlice.reducer;
export const { getTagsState, getTagsLoadingState } = tagsSlice.selectors;
export const { setCurrentTag } = tagsSlice.actions