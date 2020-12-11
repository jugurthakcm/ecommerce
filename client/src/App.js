import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Navbar from './components/Navbar';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cream from './assets/images/Cream.jpg';
import food from './assets/images/Food.jpg';
import parfume from './assets/images/Parfume.jpg';
import TrendingItems from './components/TrendingItems';
import Footer from './components/Footer';
import ItemsContainer from './components/ItemsContainer';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

function App() {
  const [auth, setAuth] = useState('login');

  const handleCloseAuth = () => {
    document.querySelector('.auth').classList.add('d-none');
    document.querySelector('.auth').classList.remove('d-block');
  };

  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
        {/* Carousel */}
        <div className="app__carousel">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showStatus={false}
            showArrows
            stopOnHover={true}
          >
            <div>
              <img src={cream} alt="cream" />
            </div>
            <div>
              <img src={food} alt="food" />
            </div>
            <div>
              <img src={parfume} alt="parfume" />
            </div>
          </Carousel>
        </div>

        {/* Trending Items */}
        <div className="app__trendingItems">
          <h2 className="app__subTitle">Trending Products</h2>
          <TrendingItems />
        </div>

        {/* Items Container */}
        <div className="app__items">
          <h2 className="app__subTitle">Discover Our Products</h2>
          <ItemsContainer />
        </div>
      </div>

      {/* Newsletter */}
      <div className="app__newsletter">
        <h2>Newsletter</h2>
        <form className="app__newsletterForm">
          <input
            type="email"
            placeholder="Enter your email adress here"
            required
          />
          <button type="submit">
            <span>SUBMIT</span>
            <ArrowForwardIosRoundedIcon fontSize="small" />
          </button>
        </form>
      </div>

      {/* Authentification */}
      <div className="auth d-none">
        <div className="auth__container">
          <span className="auth__closeIcon">
            <CloseRoundedIcon onClick={handleCloseAuth} />
          </span>

          {auth === 'login' ? (
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
                    <span onClick={() => setAuth('register')}>Sign Up</span>
                  </p>
                </div>
              </form>
            </div>
          ) : (
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
                    <span onClick={() => setAuth('login')}>Sign In</span>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
