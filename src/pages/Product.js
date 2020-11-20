import React, { useState, useRef } from 'react';
import { useCartContext } from '../data/CartProvider';
import { cartActions } from '../data/cartReducer';
import './Product.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Navbar from '../components/Navbar';
import TextField from '@material-ui/core/TextField';
import { ItemsData } from '../data/itemsData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { formatPrice } from '../util';
import Footer from '../components/Footer';

const Product = (props) => {
  const productId = props.match.params.product_id;
  const items = ItemsData();
  const item = items ? items.find((e) => e.id == productId) : null; // eslint-disable-line
  const dispatch = useCartContext()[1];
  const [itemQuantity, setItemQuantity] = useState();
  const addItem = useRef();
  const inStock = 40;

  const handleClick = () => {
    const itemSelected = {
      title: item.title,
      quantity: parseInt(itemQuantity),
      price: item.price,
      image: item.image,
      description: item.description,
      inStock,
      id: item.id,
      category: item.category,
    };
    dispatch({
      item: itemSelected,
      type: cartActions.ADD_ITEM,
    });
  };

  const handleChange = (e) => {
    if (e.target.value > 0 && e.target.value <= inStock) {
      addItem.current.classList.remove('Btn-disabled');
      addItem.current.disabled = false;
      setItemQuantity(e.target.value);
    } else {
      addItem.current.classList.add('Btn-disabled');
      addItem.current.disabled = true;
      setItemQuantity('');
    }
  };
  return (
    <>
      <Navbar />
      {item && (
        <div className="product">
          <div className="product__image">
            <Carousel>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </Carousel>
          </div>
          <div className="product__info">
            <div>
              <h2 className="product__infoTitle">{item.title}</h2>
              <p className="product__infoDescription">{item.description}</p>
            </div>

            <p className="product__infoPrice">
              <sup style={{ fontSize: '1rem' }}>$</sup>{' '}
              {formatPrice(item.price)}
            </p>

            <p className="product__infoStock">Left in stock : {inStock}</p>
            <div className="product__infoQuantity">
              <TextField
                id="standard-number"
                label="Quantity"
                type="number"
                onChange={handleChange}
                value={itemQuantity}
                InputProps={{
                  inputProps: {
                    max: inStock,
                    min: 0,
                  },
                }}
              />
            </div>

            <button
              className="product__infoButton Btn-disabled"
              onClick={handleClick}
              ref={addItem}
            >
              Add to Cart <ShoppingCartOutlinedIcon />
            </button>
          </div>
        </div>
      )}
      <Footer marginTop={20} />
    </>
  );
};

export default Product;
