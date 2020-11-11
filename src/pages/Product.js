import React from 'react';
import './Product.css';
import shoes from '../assets/images/shoes.png';
import Navbar from '../components/Navbar';
import TextField from '@material-ui/core/TextField';

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="product">
        <div className="product__thumbnails">
          <img src={shoes} alt="shoes" width="100px" />
          <img
            src={shoes}
            alt="shoes"
            style={{ transform: 'scaleX(-1)' }}
            width="100px"
          />
        </div>
        <div className="product__image">
          <img src={shoes} alt="shoes" width="400px" />
        </div>
        <div className="product__info">
          <div>
            <h2 className="product__infoTitle">Nike Air Max</h2>
            <p className="product__infoDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repellat eos itaque distinctio! Quos, possimus exercitationem.
              Illum dolores non quod deserunt iste odit, unde quae nesciunt
              aliquid. Quis, sed delectus?
            </p>
          </div>

          <p className="product__infoPrice">
            <sup style={{ fontSize: '1rem' }}>$</sup> 120
          </p>

          <div>
            <p className="product__infoStock">In stock : 40</p>
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
