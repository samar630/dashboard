import { combineReducers } from 'redux';

import reducerProduct from './product_reducer';

export default  combineReducers({ 
    products: reducerProduct
 });