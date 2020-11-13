import shoes from '../assets/images/shoes.png';
export const initialCart = [
  // {
  //   name: 'Nike Air Max',
  //   description:
  //     ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
  //   price: '100',
  //   img: shoes,
  //   inStock: 30,
  //   id: 1,
  //   quantity: 20,
  // },
];

export const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      return [...state, action.item];

    default:
      return state;
  }
};
