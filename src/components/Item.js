import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useCartContext } from '../data/CartProvider';
import { cartActions } from '../data/cartReducer';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    objectFit: 'contain',
  },
  input: {
    width: 50,
  },
  price: {
    fontWeight: '500',
    fontSize: '1.3rem',
  },
});

function Item({ item }) {
  const classes = useStyles();
  const [{ itemCart }, dispatch] = useCartContext();
  const [itemQuantity, setItemQuantity] = useState(0);
  const handleClick = () => {
    const itemSelected = {
      name: item.name,
      quantity: itemQuantity,
      price: item.price,
      id: item.id,
    };
    dispatch({
      item: itemSelected,
      type: cartActions.ADD_ITEM,
    });
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.img}
          title="Air max shoe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            component="p"
            className={classes.price}
          >
            <sup style={{ fontSize: '0.8rem' }}>$</sup>
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card__actions">
        <Typography component="p">Quantity</Typography>
        <TextField
          id="standard-number"
          type="number"
          className={`${classes.input} card__actionsQuantity`}
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <Button size="small" color="primary" onClick={handleClick}>
          Add to cart
          <AddShoppingCartIcon fontSize="small" style={{ marginLeft: 5 }} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;
