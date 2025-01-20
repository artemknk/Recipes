import style from './Login.module.css';
import { useState } from 'react';
import { loginUserChunk } from '../../Redux/User/chunk';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const [value, setValue] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();
  
  function handleInput(e) {
    setValue({...value, [e.target.name]: e.target.value})
    setError('')
  }
  async function handleLogin(e) {
    e.preventDefault();
    const res = await dispatch(loginUserChunk(value));
    
    if(!res.payload.message) {
      navigate('/')
    } else {
      setValue({username: '', password: ''})
      setError(res.payload.message);
    }
  }

  return  (<div className={style.container}>
      <form action="" className={style.form} onSubmit={handleLogin}> {/*слушатель на форме для отправки данных*/}
        <h1 className={style.title}>Login</h1>
        <input className={style.input} value={value.username} name="username" type="text" placeholder="Enter your Name" onInput={handleInput}/>
        <input className={style.input} value={value.password} name="password" type="password" placeholder="Enter your Password" onInput={handleInput} />
        <input className={style.button} type="submit" value="Login"  />
        <p className={style.error} >{error}</p>
      </form>
  </div>
  )
};
