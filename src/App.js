import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Item from './components/Item';
import Navbar from './components/Navbar';
import { items } from './data/itemsData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cream from './assets/images/Cream.jpg';
import food from './assets/images/Food.jpg';
import parfume from './assets/images/Parfume.jpg';
import ItemsCarousel from 'react-items-carousel';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

function App() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
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
          <div className="app__items" style={{ padding: `0 50px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={4}
              gutter={20}
              leftChevron={
                <button>
                  {<NavigateBeforeRoundedIcon fontSize="large" />}
                </button>
              }
              rightChevron={
                <button>{<NavigateNextRoundedIcon fontSize="large" />}</button>
              }
              outsideChevron
              chevronWidth={40}
            >
              {items.map((item) => (
                <Item item={item} key={item.id} />
              ))}
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
