export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_STATE = 'SET_STATE';

export const productReducer = (state, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, [action.stateKey]: action.stateValue};
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload, initialized: true };
    default:
      return state;
  }
}
