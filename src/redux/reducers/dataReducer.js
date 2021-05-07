import {
  LOADING_DATA,
  SET_PRODUCTS,
  SET_PRODUCT,
  SUBMIT_COMMENT,
} from "../types";

const initialState = {
  products: [],
  product: {},
  comments: [],
  loading: false,
};

//dataReducer-function
export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case SUBMIT_COMMENT:
      return {
        ...state,
        product: {
          ...state.product,
          comments: [action.payload, ...state.product.comments],
        },
      };

    // case ADD_PRODUCT:
    // case REMOVE_PRODUCT:
    //   let index = state.products.findIndex(
    //     (product) => product.productId === action.payload.productId
    //   );
    //   state.products[index] = action.payload;
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
}
