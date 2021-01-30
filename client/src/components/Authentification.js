import React from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Login from './Login';
import Register from './Register';
import { useSelector } from 'react-redux';

function Authentification() {
  const auth = useSelector((state) => state.authForm);
  const handleCloseAuth = () => {
    document.querySelector('.auth').classList.add('d-none');
    document.querySelector('.auth').classList.remove('d-block');
  };

  return (
    <div className="auth d-none">
      <div className="auth__container">
        <span className="auth__closeIcon">
          <CloseRoundedIcon onClick={handleCloseAuth} />
        </span>

        {auth === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default Authentification;
