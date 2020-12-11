import React from 'react';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { useDispatch } from 'react-redux';
import { showRegisterForm } from '../data/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="auth__login">
      <h2 className="auth__title">Sign In</h2>

      <form className="auth__form">
        <div className="auth__formInput input-email">
          <EmailRoundedIcon fontSize="small" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="auth__formInput input-password">
          <LockRoundedIcon fontSize="small" />
          <input type="password" placeholder="Password" />
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
