
import { FETCH_ALL, DELETE, CREATE, UPDATE, SET_LOADING } from '../constants/actionTypes';

  const initialState = {
    products : [],
    loading :false
  }
  
const reducerProduct = (state = initialState, {type, payload}) => {
  console.log(payload, "payload")
    switch(type) {
        case SET_LOADING:
            return {
              ...state,
            loading: true
            }
      case FETCH_ALL:
        return {
          ...state,
          products: payload,
          loading: false
        }
        case CREATE:
          return {
        ...state,
        products: payload,
        loading: false
          }
      case UPDATE:
        return{
            ...state,
            products:payload,
            loading: false
        }
      case DELETE:
        return {
          ...state,
          products : state.products.filter((row) => row.id !== state.payload),
          loading: false
        }
     
      default:
        return state
    }
  }

  export default reducerProduct