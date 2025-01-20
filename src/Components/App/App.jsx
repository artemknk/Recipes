import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipesChunk } from '../../Redux/Recipes/chunk';
import { getTagsChunk } from '../../Redux/Tags/chunk';
import { loginUserChunk } from '../../Redux/User/chunk';
import { useEffect } from 'react';
import Main from '../../Pages/Main/Main';
import Login from '../../Pages/Login/Login';
import SingleRecipe from '../../Pages/SingleRecipe/SingleRecipe';


function App() {
  const recipes = useSelector((state) => state.recipe.filterRecipes);
  
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRecipesChunk());
    dispatch(getTagsChunk());
  }, []);

  return <div>
    <Routes>
      <Route path="/" element={<Main recipes={recipes}  />} />
      <Route path="/recipe/:id" element={<SingleRecipe />} />
      <Route path="/login" element={<Login /> } />
    </Routes>
  </div>
}

export default App;
