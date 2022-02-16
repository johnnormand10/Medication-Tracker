import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

//material ui
import TextField from '@mui/material/TextField';

function LoginForm() {
  //local state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  //login function
  const login = (event) => {
    //prevents page reload
    event.preventDefault();
    //if there is a username and password, 
    //then send a request to SAGA to execute
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else { //send a SAGA to execute an error message
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {/* if the error SAGA is sent, then show the alert */}
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label id="loginInput"htmlFor="username">
          Username:
          <input
            size="small"
            label="Username"
            className="usernameInput"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label id="loginInput" htmlFor="password">
          Password:
          <input
            size="small"
            label="Password"
            className="passwordInput"
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
