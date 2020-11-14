import shoes from '../assets/images/shoes.png';
export const initialCart = [
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '100',
    img: shoes,
    inStock: 30,
    id: 1,
    quantity: 20,
  },
  {
    name: 'Rolex Watch',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '200',
    img: shoes,
    inStock: 40,
    id: 3,
    quantity: 20,
  },
];

export const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      return [...state, action.item];
    case cartActions.DELETE_ITEM:
      const newState = state.filter((e) => e.id !== action.deletedItem);
      return [...newState];
    default:
      return state;
  }
};
