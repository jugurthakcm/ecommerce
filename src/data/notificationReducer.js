export const initialNotification = {
  notification: 3,
};

export const notificationActions = {
  INCREMENT_NOTIFICATION: 'INCREMENT_NOTIFICATION',
};

export const notificationReducer = (state, action) => {
  console.log(action);
  switch (action) {
    case notificationActions.INCREMENT_NOTIFICATION:
      return { ...state, notification: action.amount };

    default:
      return state;
  }
};
