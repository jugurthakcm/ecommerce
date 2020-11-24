import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Navbar from './components/Navbar';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cream from './assets/images/Cream.jpg';
import food from './assets/images/Food.jpg';
import parfume from './assets/images/Parfume.jpg';
import TrendingItems from './components/TrendingItems';
import { filterCategories } from './util';
import { ItemsData } from './data/itemsData';
import Footer from './components/Footer';

function App() {
  const itemsAPI = ItemsData();
  const categories = itemsAPI ? filterCategories(itemsAPI) : null;
  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
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
        <div className="app__trendingItems">
          <h2 className="app__subTitle">Trending items</h2>
          <TrendingItems />
        </div>
      </div>
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
      <Footer />
    </div>
  );
}

export default App;
