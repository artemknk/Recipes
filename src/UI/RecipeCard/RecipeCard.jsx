import style from './RecipeCard.module.css';
import RecipeTags from '../RecipeTags/RecipeTags';
import { Link } from 'react-router-dom';
import RecipeCardHeader from '../RecipeCardHeader/RecipeCardHeader';
import { recipeMode } from '../../service';
import { useDispatch } from 'react-redux';
import { setFilterRecipes, setDifficultyRecipes } from '../../Redux/Recipes';

const RecipeCard = ({recipe, tags}) => {
  const dispatch = useDispatch();

  function handleClickFilter(tag){
    dispatch(setFilterRecipes(tag));
  }

  function handleClickDifficulty(difficulty){
    dispatch(setDifficultyRecipes(difficulty));
  }

  return (
    <div className={`${style.card} ${recipeMode[recipe.difficulty]}`}>
      <RecipeCardHeader recipe={recipe} />
      <img className={style.image} src={recipe.image} alt="" />
      <Link className= {style.link} to={`/recipe/${recipe.id}` } >View Recipe</Link>
      <div className={style.tags}>{recipe.tags.map((tag, index) => <RecipeTags key={index} tags={tag} func={handleClickFilter} />)}</div>
      <div className={style.difficulty} onClick={() => handleClickDifficulty(recipe.difficulty)}>{recipe.difficulty}</div>
    </div>
  )
}

export default RecipeCard