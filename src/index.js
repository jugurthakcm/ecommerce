import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { NotificationProvider } from './data/NotificationProvider';
import { CartProvider } from './data/CartProvider';
import {
  initialNotification,
  notificationReducer,
} from './data/notificationReducer';
import { initialCart, cartReducer } from './data/cartReducer';

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider
      initialNotification={initialNotification}
      notificationReducer={notificationReducer}
    >
      <CartProvider initialCart={initialCart} cartReducer={cartReducer}>
        <App />
      </CartProvider>
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
