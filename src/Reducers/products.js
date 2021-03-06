import {
  GET_PRODUCTS,
  GET_PRODUCT,
  CREATE_PRODUCT,
  CLOSE_NOTIFICATION,
} from '../Actions/types';

const defaultState = {
  products: [],
  open: false,
  product: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    case GET_PRODUCT:
      return {
        product: action.payload,
        open: state.open,
      };
    case CREATE_PRODUCT:
      return {
        open: action.payload,
      };
    case CLOSE_NOTIFICATION:
      return {
        open: action.payload,
      };
    default:
      return state;
  }
};
