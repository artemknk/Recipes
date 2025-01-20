import style from './RecipeCardHeader.module.css';

const RecipeCardHeader = ({recipe}) => {
  return (
    <div className={style.card__header}>
      <div className={style.cookTimeMinutes}>{recipe.cookTimeMinutes}</div>
      <div className={style.title}>{recipe.name}</div>
      <div className={style.rating}>{recipe.rating}</div>
    </div>
  )
}

export default RecipeCardHeader