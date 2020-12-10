import React, { useState, useRef } from 'react';
import './ItemsContainer.css';
import { filterCategories } from '../util';
import { ItemsData } from '../data/itemsData';
import Item from './Item';
import Skeleton from '@material-ui/lab/Skeleton';

const ItemsContainer = () => {
  const itemsAPI = ItemsData();

  const categories = itemsAPI ? filterCategories(itemsAPI) : [];

  const [categoryItems, setCategoryItems] = useState('men clothing');

  const skeltons = Array(9).fill(
    <Skeleton
      variant="rect"
      height={350}
      animation="wave"
      className="item__skeleton"
    />
  );

  const filtredItems = itemsAPI
    ? itemsAPI
        .filter((item) => item.category === categoryItems)
        .map((item) => <Item item={item} key={item.id} />)
    : skeltons;

  const categoriesRef = useRef();

  const handleChangeCategory = (e) => {
    setCategoryItems(e.target.textContent);
  };

  return (
    <div className="itemsContainer">
      <div className="items__categories" ref={categoriesRef}>
        <h4>Categories</h4>
        <ul>
          {categories.length
            ? categories.map((category) => (
                <li key={category} onClick={handleChangeCategory}>
                  {category}
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
