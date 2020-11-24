import React from 'react';
import { ItemsData } from '../data/itemsData';
import Item from './Item';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const TrendingItems = () => {
  const items = ItemsData();
  const filtredItems =
    items &&
    items
      .filter((item) => item.category === 'men clothing')
      .map((item) => <Item item={item} key={item.id} />);

  const autoPlay = filtredItems ? true : false;

  const responsive = {
    992: { items: 4 },
    768: { items: 3 },
    576: { items: 2 },
  };
  return (
    <div className="trendingItems">
      <AliceCarousel
        items={filtredItems}
        responsive={responsive}
        disableDotsControls
        infinite
        autoPlay={autoPlay}
        autoPlayInterval={2000}
      />
    </div>
  );
};

export default TrendingItems;
