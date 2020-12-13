import React, { useState } from 'react';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { useDispatch } from 'react-redux';
import { showRegisterForm } from '../data/actions/authFormActions';
import { loginUser } from '../data/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
    setCredentials({ email: '', password: '' });
    document.querySelector('.auth').classList.add('d-none');
    document.querySelector('.auth').classList.remove('d-block');
  };

  return (
    <div className="auth__login">
      <h2 className="auth__title">Sign In</h2>

      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__formInput input-email">
          <EmailRoundedIcon fontSize="small" />
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>

        <div className="auth__formInput input-password">
          <LockRoundedIcon fontSize="small" />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="rememberMe" className="auth__rememberMe">
          <input type="checkbox" name="rememberMe" />
          <span>Remember me</span>
        </label>

        <div className="auth__formFooter">
          <button type="submit">Login</button>
          <p>
            If you don't have an account,{' '}
            <span onClick={() => dispatch(showRegisterForm())}>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
