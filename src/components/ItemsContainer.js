import React, { useState } from 'react';
import './ItemsContainer.css';
import { filterCategories } from '../util';
import { ItemsData } from '../data/itemsData';
import Item from './Item';

const ItemsContainer = () => {
  const itemsAPI = ItemsData();
  const categories = itemsAPI ? filterCategories(itemsAPI) : null;

  const [categoryItems, setCategoryItems] = useState('men clothing');
  const filtredItems =
    itemsAPI &&
    itemsAPI
      .filter((item) => item.category === categoryItems)
      .map((item) => <Item item={item} key={item.id} />);

  const handleChangeCategory = (e) => {
    console.log(e.target.textContent);
    setCategoryItems(e.target.textContent);
  };

  return (
    <div className="itemsContainer">
      <div className="items__categories">
        <h4>Categories</h4>
        <ul>
          {categories &&
            categories.map((category) => (
              <li key={category} onClick={handleChangeCategory}>
                {category}
              </li>
            ))}
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
