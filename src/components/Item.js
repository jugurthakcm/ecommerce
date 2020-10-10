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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  input: {
    width: 50,
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
  },
});

function Item() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1"
          title="Air max shoe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nike Air Max
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, nemo.
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            component="p"
            className={classes.price}
          >
            <sup style={{ fontSize: '0.8rem' }}>$</sup>100
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
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;
