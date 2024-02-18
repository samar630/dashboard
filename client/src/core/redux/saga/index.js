import { spawn } from 'redux-saga/effects'
import productSaga from './products-saga'

// Sagas


// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!")

  yield spawn(productSaga)
 
}