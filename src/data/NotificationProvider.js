import React, { createContext, useContext, useReducer } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({
  notificationReducer,
  children,
  initialNotification,
}) => (
  <NotificationContext.Provider
    value={useReducer(notificationReducer, initialNotification)}
  >
    {children}
  </NotificationContext.Provider>
);

export const useNotificationContext = () => useContext(NotificationContext);
