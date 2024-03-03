
import { FETCH_ALL_CATEGORIES, DELETE_CATEGORIES, CREATE_CATEGORIES, UPDATE_CATEGORIES, SET_LOADING } from '../constants/actionTypeCategories';

  const initialState = {
    categories : [],
    loading :false
  }
  
const reducerCategories= (state = initialState, {type, payload}) => {
  console.log(payload, "payload")
    switch(type) {
        case SET_LOADING:
            return {
              ...state,
            loading: true
            }
      case FETCH_ALL_CATEGORIES:
        return {
          ...state,
          categories: payload,
          loading: false
        }
        case CREATE_CATEGORIES:
          return {
        ...state,
        categories: payload,
        loading: false
          }
      case UPDATE_CATEGORIES:
        return{
            ...state,
            categories:payload,
            loading: false
        }
      case DELETE_CATEGORIES:
        return {
          ...state,
          categories:payload?.payload,
          // categories : state.categories.filter((row) => row.id !== state.payload),
          loading: false
        }
     
      default:
        return state
    }
  }

  export default reducerCategories