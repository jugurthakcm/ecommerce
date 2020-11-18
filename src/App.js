import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Navbar from './components/Navbar';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cream from './assets/images/Cream.jpg';
import food from './assets/images/Food.jpg';
import parfume from './assets/images/Parfume.jpg';
import ItemsContainer from './components/ItemsContainer';
import { filterCategories } from './util';
import { ItemsData } from './data/itemsData';

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
            interval={2000}
            showThumbs={false}
            showStatus={false}
            showArrows
            stopOnHover={false}
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
        {categories &&
          categories.map((category) => <ItemsContainer category={category} />)}
      </div>
    </div>
  );
}

export default App;
