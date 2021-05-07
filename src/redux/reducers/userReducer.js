import {
  SET_USER,
  LOADING_USER,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_COUNT,
  DECREASE_COUNT,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from "../types";

//initialState: the userReducer default-state
const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  cart: [],
};

//userReducer-function
export default function userReducer(state = initialState, action) {
  //switch case depending on the action-type received
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };

    case SET_UNAUTHENTICATED:
      //return default-state when we logout
      return initialState;

    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };

    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            userHandle: state.credentials.handle,
            productPrice: action.payload.productPrice,
            productName: action.payload.productName,
            imageUrl: action.payload.imageUrl,
            productId: action.payload.productId,
            count: action.payload.count,
            total: action.payload.total,
          },
        ],
      };

    case REMOVE_PRODUCT:
      let indexx = state.cart.findIndex(
        (item) => item.productId === action.payload
      );
      state.cart.splice(indexx, 1);
      return {
        ...state,
      };

    case INCREASE_COUNT:
      let tempCart = [...state.cart];
      const selectedProduct = tempCart.find(
        (item) => item.productId === action.payload
      );

      selectedProduct.count = selectedProduct.count + 1;
      selectedProduct.total =
        selectedProduct.count * selectedProduct.productPrice;
      return {
        ...state,
        cart: [...tempCart],
      };

    case DECREASE_COUNT:
      let temppCart = [...state.cart];
      const selecteddProduct = temppCart.find(
        (item) => item.productId === action.payload
      );

      selecteddProduct.count = selecteddProduct.count - 1;
      selecteddProduct.total =
        selecteddProduct.count * selecteddProduct.productPrice;
      return {
        ...state,
        cart: [...temppCart],
      };

    default:
      return state;
  }
}
