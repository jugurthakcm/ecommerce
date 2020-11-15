import shoes from '../assets/images/shoes.png';
export const initialCart = [
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '100',
    img: shoes,
    inStock: 30,
    id: 18,
    quantity: 20,
  },
  {
    name: 'Rolex Watch',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '200',
    img: shoes,
    inStock: 40,
    id: 23,
    quantity: 20,
  },
];

export const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  CHANGE_QTY: 'CHANGE_QTY',
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      return [...state, action.item];
    case cartActions.DELETE_ITEM:
      return state.filter((e) => e.id !== action.deletedItem);

    case cartActions.CHANGE_QTY:
      return state.map((e) =>
        e.id === action.item.id
          ? Object.assign(e, { quantity: action.item.quantity })
          : e
      );

    default:
      return state;
  }
};
