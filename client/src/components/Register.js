import React, { useState } from 'react';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { showLoginForm } from '../data/actions/authFormActions';
import { useDispatch } from 'react-redux';
import { registerUSer } from '../data/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUSer(credentials));
    setCredentials({ firstName: '', lastName: '', email: '', password: '' });
    document.querySelector('.auth').classList.add('d-none');
    document.querySelector('.auth').classList.remove('d-block');
  };

  return (
    <div className="auth__register">
      <h2 className="auth__title">Sign Up</h2>

      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__formInput input-name">
          <PersonRoundedIcon fontSize="small" />
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            value={credentials.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="auth__formInput input-name">
          <PersonRoundedIcon fontSize="small" />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={credentials.lastName}
            onChange={handleChange}
          />
        </div>

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
