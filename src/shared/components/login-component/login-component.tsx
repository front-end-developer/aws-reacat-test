import React, { useReducer } from 'react';
import { LoginService } from '../../../service/login-service';
import { loginReducer } from './login-reducer';

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  isError: '',
  isLoggedin: false
}

export function LoginComponent() {

  const [state, dispatch] = useReducer(loginReducer, initialState);

  /*
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [isLoggedin, setIsLoggedIn] = useState(false);
  */

  const {
    username,
    password,
    isLoading,
    isError,
    isLoggedin
  } = state;

  const onSubmit = async (e:any) => {
    e.preventDefault();
    dispatch({type: 'login'});

    const result = await LoginService(username, password)
    .catch(e => {
      dispatch({ type: 'error'});
    });

    if (result === 'success') {
      dispatch({ type: 'success'});
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        { 
          isLoggedin ? 
          (<>
            <h1>Hello {username}!</h1>
            <button onClick={() => { dispatch({type: 'logout'}) }}>Log Out</button>
          </>) : (
            <form className="form" onSubmit={onSubmit}>
            { isError && <p className="error">{ isError}</p>}
            <p>Please Login!</p>
            <input type="text" 
            placeholder="username" 
            value={username} 
            onChange={e => 
              dispatch({
                type: 'field',
                field: 'username',
                value: e.currentTarget.value
              })
            } />

            <input 
            type="password" 
            placeholder="password" 
            value={password} 
            autoComplete="new-password" 
            onChange={e => 
              dispatch({
                type: 'field',
                field: 'password',
                value: e.currentTarget.value
              })
            } />

            <button className="submit" type="submit" disabled={isLoading}>
              { isLoading ? 'Loggin in...' : 'Log In'}
              </button>
          </form>
        )}
      </div>
    </div>
  );
}