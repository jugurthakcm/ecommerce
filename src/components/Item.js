import React from 'react';
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
        <Typography component="p">Amount</Typography>
        <TextField
          id="standard-number"
          type="number"
          className={`${classes.input} card__actionsAmount`}
        />
        <Button size="small" color="primary">
          Add to cart{' '}
          <AddShoppingCartIcon fontSize="small" style={{ marginLeft: 5 }} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;
