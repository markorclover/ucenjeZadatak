import {
  SET_PRODUCT_LIST,
  SET_STATE, SELECTED_ITEM,
  NEW_SELECTED_ITEM
} from './reducers';

export const setProductList = payload => ({type: SET_PRODUCT_LIST, payload});
export const setState = (stateKey, stateValue) => ({type: SET_STATE, stateKey, stateValue});
export const selectedItem = selectedItem => ({type: SELECTED_ITEM, selectedItem});
export const newSelectedItem = selectedItem => ({type: NEW_SELECTED_ITEM, selectedItem});
