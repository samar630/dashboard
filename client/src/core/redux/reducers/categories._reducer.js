
import { FETCH_ALL_CATEGORIES, DELETE_CATEGORIES, CREATE_CATEGORIES, UPDATE_CATEGORIES, SET_LOADING, FETCH_ALL_CATEGORIES_BY_ID, FETCH_SEARCH_CATEGORIES } from '../constants/actionTypeCategories';

  const initialState = {
    categories : [],
    loading :false,
    key:''
  }
  
const reducerCategories= (state = initialState, {type, payload}) => {

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
          case FETCH_ALL_CATEGORIES_BY_ID:
            return{
              ...state,
              categories:payload,
              loading:false
            }
            case FETCH_SEARCH_CATEGORIES:
              return{
                ...state,
                key: payload,
                 
                loading:false
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