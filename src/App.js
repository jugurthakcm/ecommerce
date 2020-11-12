import React from 'react';
import './App.css';
import Item from './components/Item';
import Navbar from './components/Navbar';
import { items } from './data/itemsData';

function App() {
  return (
    <div className="app">
      <Navbar />
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
  );
}

export default App;
