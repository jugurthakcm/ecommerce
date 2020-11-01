import React from 'react';
import Navbar from '../components/Navbar';
import './Cart.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const Cart = () => {
  const items = [
    {
      name: 'Item one',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
      price: '100',
      img: 'https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1',
      id: 1,
    },
    {
      name: 'Item two',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
      price: '200',
      img: 'https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1',
      id: 2,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="cart__itemsList">
        {items.map((item) => (
          <div className="cart__item">
            <div className="cart__itemLeft">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="cart__itemRight">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <h3>
                <sup>$</sup>
                {item.price}
              </h3>
              <p className="cart__itemRightQty">
                <Typography component="p">Quantity</Typography>
                <TextField id="standard-number" type="number" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
