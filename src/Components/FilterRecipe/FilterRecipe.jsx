import style from './FilterRecipe.module.css';
import { useDispatch, useSelector } from 'react-redux';
import RecipeTags from '../../UI/RecipeTags/RecipeTags';
import RecipeDifficulty from '../../UI/RecipeDifficulty/RecipeDifficulty';
import { setFilterRecipes, setDifficultyRecipes } from '../../Redux/Recipes';
import { useEffect, useRef } from 'react';

export default function FilterRecipe({isOpen, closeFilter}) {
  const tags = useSelector((state) => state.tag.tags);
  const difficulty = useSelector((state) => state.recipe.difficulty);
  const ref = useRef(null);
  const dispatch = useDispatch();

  function handleClickFilter(tag){
    dispatch(setFilterRecipes(tag));
  }

  function handleClickDifficulty(difficulty){
    dispatch(setDifficultyRecipes(difficulty));
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeFilterOverlay);
  }, [])

  function closeFilterOverlay (e) {
    if(!ref.current?.contains(e.target)) {
      closeFilter()
    }
  }
  
  return (
    <div ref={ref} className={`${style.container} ${isOpen ? style.open : style.close}`}>
      <h1 className={style.title}>Filter Recipe</h1>
      <h2 className={style.subtitle}>Difficulty</h2>
      <div className={style.difficulty}>
        {['Easy', 'Medium', 'Hard'].map((difficulty, index) => <RecipeDifficulty func={handleClickDifficulty} key={index} difficulty={difficulty}  />)}
      </div>
      <h2 className={style.subtitle}>Tags</h2>
      <div className={style.tags}>
        <RecipeTags func={handleClickFilter} tags="All" />
        {tags.slice().sort().map((tag, index) => <RecipeTags func={handleClickFilter} key={index} tags={tag} />)}
      </div>
    </div>
  )
}