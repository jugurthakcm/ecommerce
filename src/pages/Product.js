import React from 'react';
import './Product.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
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
          <img src={item.img} alt="shoes" width="80px" />
          <img
            src={item.img}
            alt="shoes"
            style={{ transform: 'scaleX(-1)' }}
            width="80px"
          />
        </div>
        <div className="product__image">
          <img src={item.img} alt="shoes" width="500px" />
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

          <div>
            <p className="product__infoStock">In stock : {item.inStock}</p>
            <div className="product__infoQuantity">
              <TextField id="standard-number" label="Quantity" type="number" />
            </div>
          </div>

          <button className="product__infoButton">
            Add to Cart <ShoppingCartOutlinedIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
