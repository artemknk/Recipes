import { Link } from 'react-router-dom';
import style from './LoginButton.module.css';

const LoginButton = () => {
  return  (
    <div className={style.container}>
      <Link to="/login" className={style.button}>Login</Link>
    </div>
  )
}

export default LoginButton;