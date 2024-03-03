import { combineReducers } from 'redux';

import reducerProduct from './product_reducer';
import reducerCategories from './categories._reducer';

export default  combineReducers({ 
    products: reducerProduct,
    categories: reducerCategories
 });