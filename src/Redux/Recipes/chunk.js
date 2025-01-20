import { createAsyncThunk } from "@reduxjs/toolkit"; // функция для создания асинзронных thunks (переходов, действий)
import { api } from "../../Api";

// thunk для получения рецептов
// Код создает асинхронный thunk с именем getRecipesChunk с помощью createAsyncThunk. Запрос имеет тип "recipes/getRecipes" и вызывает метод api.getRecipes() при отправке.

export const getRecipesChunk = createAsyncThunk(
  "recipes/getRecipes",
  () => api.getRecipes()
)

export const getSingleRecipeChunk = createAsyncThunk(
  "recipes/getSingleRecipe",
  (id) => api.getSingleRecipe(id)
)

// Этот модуль будет обрабатывать асинхронную операцию извлечения рецептов из API.

//Определение конструктора рецептов

// В коде определена функция RecipeBuilder, которая принимает объект конструктора в качестве аргумента. Этот объект builder, скорее всего, является частью редуктора Redux и используется для определения того, как должно изменяться состояние в ответ на различные действия.
export const RecipeBuilder = (builder) => {
  builder.addCase(getRecipesChunk.pending, (state) => {
    // Pending: Когда выполнение запроса getRecipesChunk находится в ожидании (т.е. выполняется запрос API), состояние обновляется, чтобы установить значение loading равным true, а значение error равным null.
    state.loading = true;
    state.error = null;
  }).addCase(getRecipesChunk.fulfilled, (state, action) => {
    // Fulfilled: Когда выполняется команда getRecipesChunk (т.е. запрос API выполняется успешно), состояние обновляется, чтобы установить для recipes значение полезной нагрузки, для loading значение false, а для error значение null.
    state.recipes = action.payload.recipes;
    state.filterRecipes = action.payload.recipes;
    state.loading = false;
  }).addCase(getRecipesChunk.rejected, (state, action) => {
    // Rejected: Когда функция getRecipesChunk отклоняется (т.е. запрос API завершается ошибкой), состояние обновляется, чтобы присвоить сообщению об ошибке значение error, loading значение false, а recipes - пустой массив.
    state.error = action.error.message;
    state.loading = false;
    state.recipes = [];
  })
  // Определяя эти случаи, функция RecipeBuilder определяет, как должно изменяться состояние в ответ на различные этапы выполнения команды getRecipesChunk.

  .addCase(getSingleRecipeChunk.pending, (state) => {
    state.loading = true;
    state.error = null;
    state.currentRecipe = null;
  }).addCase(getSingleRecipeChunk.fulfilled, (state, action) => {
    state.currentRecipe = action.payload;
    state.loading = false;
  }).addCase(getSingleRecipeChunk.rejected, (state, action) => {
    state.error = action.error.message;
    state.loading = false;
    state.currentRecipe = null;
  })
}