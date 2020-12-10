import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Register.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="register">
        <div className="register__box">
          <h2 className="register__title">Sign Up</h2>
          <form className="register__form">
            <div className="login__formInput input-name">
              <PersonRoundedIcon fontSize="small" />
              <input type="text" placeholder="First Name" />
            </div>
            <div className="login__formInput input-name">
              <PersonRoundedIcon fontSize="small" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="register__formInput input-email">
              <EmailRoundedIcon fontSize="small" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="register__formInput input-password">
              <LockRoundedIcon fontSize="small" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="register__formInput input-password">
              <LockRoundedIcon fontSize="small" />
              <input type="password" placeholder="Repeat your password" />
            </div>
            <label htmlFor="rememberMe" className="register__rememberMe">
              <input type="checkbox" name="rememberMe" />
              <span>Accept our terms</span>
            </label>
            <div className="register__formFooter">
              <button type="submit">Register</button>
            </div>
          </form>
          <div className="register__boxFooter">
            <p>
              You already have an account ?<Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
