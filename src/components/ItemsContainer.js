import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import { ItemsData } from '../data/itemsData';
import Item from './Item';
import { capitalize } from '../util';

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
      <div className="app__items" style={{ padding: `0 50px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={20}
          leftChevron={
            <button>{<NavigateBeforeRoundedIcon fontSize="large" />}</button>
          }
          rightChevron={
            <button>{<NavigateNextRoundedIcon fontSize="large" />}</button>
          }
          outsideChevron
          chevronWidth={40}
          slidesToScroll={4}
          alwaysShowChevrons
          infiniteLoop
        >
          {filtredItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
};

export default ItemsContainer;
