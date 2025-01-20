import style from './RecipeInstructions.module.css';

const RecipeInstructions = ({instructions}) => {
  return (
    <div className={style.instruction}>
      {instructions}
    </div>
  )
}

export default RecipeInstructions