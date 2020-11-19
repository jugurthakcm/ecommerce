import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import { ItemsData } from '../data/itemsData';
import Item from './Item';
import { capitalize } from '../util';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ItemsContainer = ({ category }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const items = ItemsData();
  const filtredItems = items
    ? items.filter((item) => item.category === category)
    : [];

  return (
    <div className="app__itemsContainer">
      <div className="app__itemsHeader">
        <h2>{capitalize(category)}</h2>
      </div>

      <div className="app__items">
        <AliceCarousel
          items={filtredItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
          responsive={{ 1024: { items: 4 } }}
        />
      </div>
    </div>
  );
};

export default ItemsContainer;
