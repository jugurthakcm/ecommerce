import React from 'react';
import './Product.css';
import shoes from '../assets/images/shoes.png';
import Navbar from '../components/Navbar';
import TextField from '@material-ui/core/TextField';
import { items } from '../data/itemsData';

const Product = (props) => {
  const productId = props.match.params.product_id;
  const item = items.find((e) => e.id == productId);
  console.log(item);
  return (
    <>
      <Navbar />
      <div className="product">
        <div className="product__thumbnails">
          <img src={item.img} alt="shoes" width="100px" />
          <img
            src={item.img}
            alt="shoes"
            style={{ transform: 'scaleX(-1)' }}
            width="100px"
          />
        </div>
        <div className="product__image">
          <img src={item.img} alt="shoes" width="400px" />
        </div>
        <div className="product__info">
          <div>
            <h2 className="product__infoTitle">{item.name}</h2>
            <p className="product__infoDescription">{item.description}</p>
          </div>

          <p className="product__infoPrice">
            <sup style={{ fontSize: '1rem' }}>$</sup> {item.price}
          </p>

          <div>
            <p className="product__infoStock">In stock : {item.inStock}</p>
            <div className="product__infoQuantity">
              <TextField id="standard-number" label="Quantity" type="number" />
            </div>
          </div>

          <p className="product__infoTotal">
            Total : <sup style={{ fontSize: '0.9rem' }}>$</sup> 1200
          </p>
          <button className="product__infoButton">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
