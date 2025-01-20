import style from './Search.module.css';
import { useDispatch } from 'react-redux';
import { setSearchRecipes } from '../../Redux/Recipes';
const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setSearchRecipes(value))
  }

  return (
    <input type="search" placeholder="Search recipes" className={style.searchBar} onInput={handleSearch} />
  )
}

export default Search