import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./Recipes";
import tagsSlice from "./Tags";
import userSlice from "./User";

export const store = configureStore({
  reducer: {
    recipe: recipesSlice,
    tag: tagsSlice,
    user: userSlice
  },
});
