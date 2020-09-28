import { SET_PRODUCT_LIST, SET_STATE } from './reducers';

export const setProductList = payload => ({type: SET_PRODUCT_LIST, payload});
export const setState = (stateKey, stateValue) => ({type: SET_STATE, stateKey, stateValue});
