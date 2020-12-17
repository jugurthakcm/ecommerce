import React, { useEffect } from 'react';
import Item from './Item';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Skeleton from '@material-ui/lab/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { trendingItems } from '../data/actions/itemActions';

const TrendingItems = () => {
  const dispatch = useDispatch();

  //Get the trending items from the api
  useEffect(() => {
    dispatch(trendingItems());
  }, [dispatch]);

  //Get the trending items from the reducer
  const items = useSelector((state) => state.item.trendingItems);

  //Lazy loading using Skeleton
  const skeltons = Array(4).fill(
    <Skeleton variant="rect" height={350} animation="wave" className="item" />
  );

  //Render the items to the Item component
  const filtredItems = items
    ? items.map((item) => <Item item={item} key={item._id} />)
    : skeltons;

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
