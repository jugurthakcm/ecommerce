import React, { useState, useRef, useEffect } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { getOneItem } from '../data/actions/itemActions';

const Product = (props) => {
  const productId = props.match.params.product_id;
  const dispatche = useDispatch();

  const dispatch = useCartContext()[1];

  useEffect(() => {
    dispatche(getOneItem(productId));
  }, [dispatche, productId]);

  const item = useSelector((state) => state.item.oneItem);
  const [itemQuantity, setItemQuantity] = useState();
  const addItem = useRef();

  const handleClick = () => {
    const itemSelected = {
      title: item.title,
      quantity: parseInt(itemQuantity),
      price: item.price,
      image: item.image,
      description: item.description,
      inStock: item.inStock,
      id: item._id,
      category: item.category,
    };
    dispatch({
      item: itemSelected,
      type: cartActions.ADD_ITEM,
    });
  };

  const handleChange = (e) => {
    if (e.target.value > 0 && e.target.value <= item.inStock) {
      addItem.current.classList.remove('Btn-disabled');
      addItem.current.disabled = false;
      setItemQuantity(e.target.value);
    } else {
      addItem.current.classList.add('Btn-disabled');
      addItem.current.disabled = true;
      setItemQuantity('');
    }
  };
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      {item ? (
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

            <p className="product__infoStock">Left in stock : {item.inStock}</p>
            <div className="product__infoQuantity">
              <TextField
                id="standard-number"
                label="Quantity"
                type="number"
                onChange={handleChange}
                value={itemQuantity}
                InputProps={{
                  inputProps: {
                    max: item.inStock,
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
      ) : (
        <div className="page__loading">
          <CircularProgress size={50} />
        </div>
      )}
      <Footer marginTop={20} />
    </>
  );
};

export default Product;
