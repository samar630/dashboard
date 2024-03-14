import { combineReducers } from 'redux';

import reducerProduct from './product_reducer';
import reducerCategories from './categories._reducer';
import reducerUser from './auth_reducer';


export default  combineReducers({ 
    products: reducerProduct,
    categories: reducerCategories,
    user :reducerUser
 });