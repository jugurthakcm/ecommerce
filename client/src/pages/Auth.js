import React from 'react';
import Navbar from '../components/Navbar';
import './Auth.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const Auth = () => {
  return (
    <div className="auth__page">
      <Navbar />

      <div className="auth__container">
        <div className="auth__formsContainer">
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
            </div>
          </form>
        </div>

        <div className="separator"></div>

        <div className="auth__formsContainer">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
