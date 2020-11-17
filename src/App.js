import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Item from './components/Item';
import Navbar from './components/Navbar';
import { items } from './data/itemsData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cream from './assets/images/Cream.jpg';
import food from './assets/images/Food.jpg';
import parfume from './assets/images/Parfume.jpg';

function App() {
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
        <div className="app__itemsContainer">
          <div className="app__itemsHeader">
            <h2>Shoes</h2>
          </div>
          <div className="app__items">
            {items.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
