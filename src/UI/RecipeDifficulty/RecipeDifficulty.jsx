import style from './RecipeDifficulty.module.css';


const RecipeDifficulty = ({difficulty, func}) => {
  return (
    <p className={`${style.difficulty} ${difficulty.toLowerCase()}`} onClick={() => func(difficulty)}>{difficulty}</p>
  )
}

export default RecipeDifficulty