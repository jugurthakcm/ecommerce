import React from 'react';
import { ItemsData } from '../data/itemsData';
import Item from './Item';
import { capitalize } from '../util';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ItemsContainer = ({ category }) => {
  const items = ItemsData();
  const filtredItems = items
    ? items
        .filter((item) => item.category === category)
        .map((item) => <Item item={item} key={item.id} />)
    : [];

  return (
    <div className="app__itemsContainer">
      <div className="app__itemsHeader">
        <h2>{capitalize(category)}</h2>
      </div>

      <div className="app__items">
        <AliceCarousel
          items={filtredItems}
          responsive={{ 1024: { items: 4 } }}
          disableDotsControls
          infinite
          autoPlay
          autoPlayInterval={2000}
          paddingLeft={35}
          paddingRight={35}
        />
      </div>
    </div>
  );
};

export default ItemsContainer;
