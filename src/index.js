import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { NotificationProvider } from './data/NotificationProvider';
import {
  initialNotification,
  notificationReducer,
} from './data/notificationReducer';

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider
      initialNotification={initialNotification}
      notificationReducer={notificationReducer}
    >
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
