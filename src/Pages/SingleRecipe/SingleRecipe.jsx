import style from './SingleRecipe.module.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSingleRecipeChunk } from '../../Redux/Recipes/chunk';
import { recipeMode } from '../../service';
import Header from '../../Components/Header/Header';
import RecipeCardHeader from '../../UI/RecipeCardHeader/RecipeCardHeader';
import RecipeIngredients from '../../UI/RecipeIngredients/RecipeIngredients';
import RecipeInstructions from '../../UI/RecipeInstructions/RecipeInstructions';
import RecipeTags from '../../UI/RecipeTags/RecipeTags';
export default function SingleRecipe() {
  const recipe = useSelector((state) => state.recipe.currentRecipe);
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(getSingleRecipeChunk(id));
  }, [id, dispatch]);
  
 
  return  <div className={style.container}>
    <Header />
   {recipe && <div className={`${style.card} ${recipeMode[recipe.difficulty]}`}>
      <RecipeCardHeader recipe={recipe} />
      <div className={style.content}>
        <img className={style.image} src={recipe.image} alt="" />
        <div className={style.tags}>{recipe.tags.map((tag, index) => <RecipeTags key={index} tags={tag} />)}</div>
        <div className={style.ingredients}>
          <span className={style.ingredientTitle}>Ingredients:</span>
          {recipe.ingredients.map((ingredient, index) => <RecipeIngredients key={index} ingredients={ingredient} />)}</div>
        <div className={style.instructions}>
          <span className={style.instructionTitle}>Instructions:</span>
          {recipe.instructions.map((instruction, index) => <RecipeInstructions key={index} instructions={instruction} />)}</div>
      </div>
    </div>}
  </div>
}