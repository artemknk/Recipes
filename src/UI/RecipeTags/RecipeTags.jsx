import style from './RecipeTags.module.css';

const RecipeTags = ({tags, func}) => {
  return (
    <p className={style.tag} onClick={() => func(tags)}> {/* попровать изменить тег на p или span?? */}
      {tags}
    </p>
  )
}

export default RecipeTags