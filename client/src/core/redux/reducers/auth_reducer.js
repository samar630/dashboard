import {  CREATE_LOGIN, CREATE_USER, DELETE_USER, FETCH_ALL_USER, LOGIN, SET_LOADING } from "../constants/actionAuth"

  const initialState = {
    users : [],
    loading :false,
    token:''
  }
  
const reducerUser = (state = initialState, {type, payload}) => {
  console.log(payload, 'payload')
    switch(type) {
        case SET_LOADING:
            return {
              ...state,
            loading: true
            }
      case FETCH_ALL_USER:
        return {
          ...state,
          users: payload,
          loading: false
        }
        case CREATE_USER:
          return {
        ...state,
        users: payload,
        loading: false
          }
          case CREATE_LOGIN:
            return {
          ...state,
          users: payload,
          loading: false
            }
      case DELETE_USER:
        return {
          ...state,
          users : state.users.filter((row) => row.id !== state.payload),
          loading: false
        }
 
      default:
        return state
    }
  }

  export default reducerUser