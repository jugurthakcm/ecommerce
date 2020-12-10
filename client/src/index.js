import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CartProvider } from './data/CartProvider';
import { initialCart, cartReducer } from './data/cartReducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Auth from './pages/Auth';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider initialCart={initialCart} cartReducer={cartReducer}>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/:category/:product_id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
