import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CartProvider } from './data/CartProvider';
import { initialCart, cartReducer } from './data/cartReducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './data/reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CartProvider initialCart={initialCart} cartReducer={cartReducer}>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/:category/:product_id" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
