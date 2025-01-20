import style from "./RecipeIngredients.module.css";

const RecipeIngredients = ({ingredients}) => {
  return (
    <div className={style.ingredient}>
      {ingredients}
    </div>
  )
}

export default RecipeIngredients;