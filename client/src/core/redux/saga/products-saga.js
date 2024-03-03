 import { put, call,takeLatest, takeEvery } from 'redux-saga/effects';
import { CREATE, CREATE_REQUESTED, DELETE, DELETE_REQUESTED, FETCH_ALL, FETCH_ALL_REQUESTED, SET_LOADING, UPDATE, UPDATE_REQUESTED } from '../constants/actionTypes';
import { createProduct, deleteProducts, fetchProduct, updateProducts } from '../actions/actionProduct';

  function* getProducts(){
    yield put({type: SET_LOADING})
    const products = yield call(fetchProduct)
    console.log(products, 'productsSaga')
    yield put({type:FETCH_ALL, payload: {products} })
  }

  function* createProducts({payload}){
    yield put({type: SET_LOADING})
    const Products = yield call(createProduct, payload?.payload)
    console.log(Products,'newProducts')
    yield put({type: CREATE, payload: {Products}})
  }
  function* updateProduct({payload}){
    yield put({type: SET_LOADING})
    const update = yield call(updateProducts, payload)
    console.log(update,'update')
    yield put({type: UPDATE, payload: {update}})
  }

  function* deleteProduct(id){
    yield put({type: SET_LOADING})
    const product = yield call(deleteProducts, id)
    yield put({type: DELETE, payload: {product}})
  }

  export default function* productSaga() {
    yield takeEvery(FETCH_ALL_REQUESTED, getProducts)
    yield takeEvery(CREATE_REQUESTED, createProducts)
    yield takeEvery(UPDATE_REQUESTED, updateProduct)
    yield takeEvery(DELETE_REQUESTED, deleteProduct)
  }