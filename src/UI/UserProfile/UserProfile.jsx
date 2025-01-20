import style from './UserProfile.module.css';
import { getUserState } from '../../Redux/User';
import { useSelector } from 'react-redux';
export default function UserProfile() {
  const user = useSelector(getUserState);
  return (
    <div className={style.container}>
      <img className={style.image} src={user.image} alt="user" />
      <div className={style.userInfo}>
      <p className={style.name}>{user.firstName} {user.lastName}</p>
      <p className={style.email}>{user.email}</p>
      </div>
    </div>
  )
}