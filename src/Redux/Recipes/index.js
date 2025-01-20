import { createSlice } from "@reduxjs/toolkit";
import { RecipeBuilder } from "./chunk";

export const initialState = {
  recipes : [],
  filterRecipes : [],
  error: null,
  loading: false,
  currentRecipe: null
}

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setFilterRecipes : (state, action) => {
      state.filterRecipes = action.payload === 'All' 
        ? state.recipes 
        : state.recipes.filter(recipe => recipe.tags.includes(action.payload));
    },
    setDifficultyRecipes : (state, action) => {
      state.filterRecipes = state.recipes.filter(recipe => recipe.difficulty === action.payload)
    },
    setSearchRecipes : (state, action) => {
      state.filterRecipes = state.recipes.filter(recipe => recipe.name.toLowerCase().includes(action.payload.toLowerCase()))
    }
  }, // изменение состояния
  selectors: {
    getStateFilterRecipes: (state) => state.filterRecipes,
  },
  extraReducers: RecipeBuilder, // изменения состояния в процессе выполнения асинхроного кода
});

export default recipesSlice.reducer;
export const { setFilterRecipes, setDifficultyRecipes, setSearchRecipes } = recipesSlice.actions;
export const { getStateFilterRecipes } = recipesSlice.selectors;
