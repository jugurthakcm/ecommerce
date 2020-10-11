export const initialNotification = {
  notification: 0,
};

export const notificationActions = {
  INCREMENT_NOTIFICATION: 'INCREMENT_NOTIFICATION',
};

export const notificationReducer = (state, action) => {
  switch (action) {
    case notificationActions.INCREMENT_NOTIFICATION:
      return state;

    default:
      return state;
  }
};
