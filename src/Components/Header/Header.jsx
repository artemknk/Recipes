import style from './Header.module.css';
import { useState } from 'react';
import FilterRecipe from '../FilterRecipe/FilterRecipe';
import Search from '../Search/Search';
import LoginButton from '../../UI/LoginButoon/LoginButton';
import UserProfile from '../../UI/UserProfile/UserProfile';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterRecipes } from '../../Redux/Recipes';
import { getUserState } from '../../Redux/User';

const Header = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();
  
  const user = useSelector(getUserState);
  const token = localStorage.token;
  
  const handleOpenFilter = () => {
    setOpenFilter(true);
  }

  const handleCloseFilter = () => {
    setOpenFilter(false);
};
  
  return (
    <div className={style.header}>
      <Link to="/" className={style.title} onClick={() => dispatch(setFilterRecipes('All'))} >Recipe App</Link>
      <Search />
      <button className={style.openFilter} onClick={handleOpenFilter}>Filter Recipe</button>
      {createPortal(<FilterRecipe isOpen={openFilter} closeFilter={handleCloseFilter} />, document.body) }
      {!user && !token && <LoginButton />}
      {user && token && <UserProfile />}
    </div>
  )
}

export default Header