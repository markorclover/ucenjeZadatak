export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_STATE = 'SET_STATE';
export const SELECTED_ITEM = 'SELECTED_ITEM';
export const NEW_SELECTED_ITEM = 'NEW_SELECTED_ITEM';

export const productReducer = (state, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, [action.stateKey]: action.stateValue};
    case SET_PRODUCT_LIST:
      const products = action.payload.map(product => {
        return ({
          id: product._id,
          name: product.name,
          price: product.price,
          pictureUrl: `https://dev.flom.app/api/v2/avatar/user/${product.file[0].file.nameOnServer}`,
        });
      })
      return { ...state, productList: action.payload, initialized: true, products };
    case SELECTED_ITEM:
      return { ...state, selectedItemId: action.selectedItem, modalIsOpened: true };
    case NEW_SELECTED_ITEM:
      return { ...state, selectedItemId: action.selectedItem };
    default:
      return state;
  }
}
