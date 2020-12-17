import React, { useState, useRef, useEffect } from 'react';
import './ItemsContainer.css';
import { filterCategories } from '../util';
import { ItemsData } from '../data/itemsData';
import Item from './Item';
import Skeleton from '@material-ui/lab/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../data/actions/itemActions';

const ItemsContainer = () => {
  const dispatch = useDispatch();

  //Getting the items from the api
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  //Getting items from the reducer
  const items = useSelector((state) => state.item.items);

  //Getting an array of the categories
  const categories = items ? filterCategories(items) : [];

  //Category state
  const [categoryItems, setCategoryItems] = useState('men_clothing');

  //Lazy loading with skeletons
  const skeltons = Array(9).fill(
    <Skeleton
      variant="rect"
      height={350}
      animation="wave"
      className="item__skeleton"
    />
  );

  //Render the items to the Item component
  const filtredItems = items
    ? items
        .filter((item) => item.category === categoryItems)
        .map((item) => <Item item={item} key={item.id} />)
    : skeltons;

  const categoriesRef = useRef();

  const handleChangeCategory = (e) => {
    setCategoryItems(e.target.id);
  };

  return (
    <div className="itemsContainer">
      <div className="items__categories" ref={categoriesRef}>
        <h4>Categories</h4>
        <ul>
          {categories.length
            ? categories.map((category) => (
                <li key={category} id={category} onClick={handleChangeCategory}>
                  {category.split('_').join(' ')}
                </li>
              ))
            : Array(3)
                .fill(<Skeleton width={150} />)
                .map((skeleton) => <li>{skeleton}</li>)}
        </ul>
      </div>
      <div className="items__perCategory">
        <div className="items">{filtredItems}</div>
        <button className="items__loadMore">Load more...</button>
      </div>
    </div>
  );
};

export default ItemsContainer;
