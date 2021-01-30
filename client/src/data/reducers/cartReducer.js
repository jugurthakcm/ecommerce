export const initialCart = [
  {
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    quantity: 1,
    price: 22.3,
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    inStock: 40,
    id: 2,
    category: 'men clothing',
  },
  {
    title: 'Mens Cotton Jacket',
    quantity: 1,
    price: 55.99,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    inStock: 40,
    id: 3,
    category: 'men clothing',
  },
];

export const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  CHANGE_QTY: 'CHANGE_QTY',
};

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      let index = null;
      for (const el of state) {
        if (el.id === action.payload.id) {
          index = state.indexOf(el);
        }
      }

      if (index !== null) {
        const el = state[index];
        const totalQty = el.quantity + action.payload.quantity;
        const { inStock } = action.payload;
        Object.assign(el, {
          quantity:
            totalQty <= inStock
              ? el.quantity + action.payload.quantity
              : el.quantity,
        });
        return [...state];
      } else {
        return [...state, action.payload];
      }

    case cartActions.DELETE_ITEM:
      return state.filter((e) => e.id !== action.payload);

    case cartActions.CHANGE_QTY:
      return state.map((e) =>
        e.id === action.payload.id
          ? Object.assign(e, { quantity: action.payload.quantity })
          : e
      );

    default:
      return state;
  }
};

export default cartReducer;
