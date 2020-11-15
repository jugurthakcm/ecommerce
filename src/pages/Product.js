import React, { useState, useRef, useEffect } from 'react';
import { useCartContext } from '../data/CartProvider';
import { cartActions } from '../data/cartReducer';
import './Product.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Navbar from '../components/Navbar';
import TextField from '@material-ui/core/TextField';
import { items } from '../data/itemsData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Product = (props) => {
  const productId = props.match.params.product_id;
  const item = items.find((e) => e.id == productId); // eslint-disable-line
  const dispatch = useCartContext()[1];
  const [itemQuantity, setItemQuantity] = useState();
  const addItem = useRef();

  useEffect(() => {
    addItem.current.disabled = true;
  }, []);

  const handleClick = () => {
    const itemSelected = {
      name: item.name,
      quantity: parseInt(itemQuantity),
      price: item.price,
      img: item.img,
      description: item.description,
      inStock: item.inStock,
      id: item.id,
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
  return (
    <>
      <Navbar />
      <div className="product">
        <div className="product__image">
          <Carousel>
            <div>
              <img src={item.img} alt={item.name} />
            </div>
            <div>
              <img
                src={item.img}
                alt={item.name}
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </Carousel>
        </div>
        <div className="product__info">
          <div>
            <h2 className="product__infoTitle">{item.name}</h2>
            <p className="product__infoDescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              nemo asperiores omnis nulla nesciunt odio quas provident aliquam,
              quisquam consequuntur. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quasi architecto, nisi commodi, dolor fugit rem
              possimus ipsa corporis, at expedita minima! Ipsa voluptatibus
              temporibus explicabo aut consequuntur. Aut, tempora consequatur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quia? Accusantium, soluta hic. Pariatur aperiam illum
              optio perferendis ab tenetur minima laudantium eius iusto odit
              cupiditate explicabo, cumque recusandae necessitatibus! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis
              consequuntur, animi laudantium veritatis repellendus eum
              perspiciatis? Deleniti eius harum est expedita fugiat pariatur
              quod, quam, unde, cum tempore voluptate labore.
            </p>
          </div>

          <p className="product__infoPrice">
            <sup style={{ fontSize: '1rem' }}>$</sup> {item.price}
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
    </>
  );
};

export default Product;
