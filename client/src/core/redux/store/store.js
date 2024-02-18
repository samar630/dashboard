
import { createStore, applyMiddleware } from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; 
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/index'
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware()
const initalState = {};
const persistConfig = {
  key: "root",
  storage: storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store