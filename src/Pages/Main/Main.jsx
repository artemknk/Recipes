import styles from './Main.module.css';
import RecipeCard from '../../UI/RecipeCard/RecipeCard';
import Header from '../../Components/Header/Header';

export default function Main({recipes}) {
  return <div className={styles.container}>
    <Header />
    {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
  </div>
}