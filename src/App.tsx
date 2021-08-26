import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginService } from './service/login-service';

const loginReducer = (state, action) => {

  return state;
}

const initialState = {
  username: '',
  password: '',
  isLoading: '',
  isError: '',
  isLoggedin: ''
}

// LoginPlain
function App() {

  const [state, dispatch] = useReducer(loginReducer, initialState);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const onSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError('');

    const result = await LoginService(username, password)
    .catch(e => {
      setIsError('incorrect username or password');
    });

    if (result === 'success') {
      setIsLoggedIn(true);
      setPassword('');
      setIsError('');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="App">
      <div className="login-container">
        { 
          isLoggedin ? 
          (<>
            <h1>Hello {username}!</h1>
            <button onClick={() => { setIsLoggedIn(false) }}>Log Out</button>
          </>) : (
            <form className="form" onSubmit={onSubmit}>
            { isError && <p className="error">{ isError}</p>}
            <p>Please Login!</p>
            <input type="text" 
            placeholder="username" 
            value={username} 
            onChange={e => setUsername(e.currentTarget.value)} />

            <input 
            type="password" 
            placeholder="password" 
            value={password} 
            autoComplete="new-password" 
            onChange={e => setPassword(e.currentTarget.value)} />

            <button className="submit" type="submit" disabled={isLoading}>
              { isLoading ? 'Loggin in...' : 'Log In'}
              </button>
          </form>
        )}
      </div>
    </div>
  );
}




/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
