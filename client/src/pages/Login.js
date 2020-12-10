import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Login.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';

const Login = () => {
  return (
    <div className="login__container">
      <Navbar />
      <div className="login">
        <div className="login__box">
          <h2 className="login__title">Sign In</h2>
          <form className="login__form">
            <div className="login__formInput input-email">
              <EmailRoundedIcon fontSize="small" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="login__formInput input-password">
              <LockRoundedIcon fontSize="small" />
              <input type="password" placeholder="Password" />
            </div>
            <label htmlFor="rememberMe" className="login__rememberMe">
              <input type="checkbox" name="rememberMe" />
              <span>Remember me</span>
            </label>
            <div className="login__formFooter">
              <a href="/login">Forgot your password ?</a>
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="login__boxFooter">
            <p>
              You don't have an account yet ?<Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
