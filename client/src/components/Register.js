import React from 'react';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { showLoginForm } from '../data/actions/authActions';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="auth__register">
      <h2 className="auth__title">Sign Up</h2>

      <form className="auth__form">
        <div className="auth__formInput input-name">
          <PersonRoundedIcon fontSize="small" />
          <input type="text" placeholder="First Name" />
        </div>

        <div className="auth__formInput input-name">
          <PersonRoundedIcon fontSize="small" />
          <input type="text" placeholder="Last Name" />
        </div>

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
          <span>Accept our terms</span>
        </label>

        <div className="auth__formFooter">
          <button type="submit">Register</button>
          <p>
            You do have an account ?{' '}
            <span onClick={() => dispatch(showLoginForm())}>Sign In</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
