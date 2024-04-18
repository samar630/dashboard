import { put, call,takeLatest, takeEvery } from 'redux-saga/effects';
import { CREATE_CATEGORIES, CREATE_REQUESTED_CATEGORIES, DELETE_CATEGORIES, DELETE_REQUESTED_CATEGORIES, FETCH_ALL_CATEGORIES, FETCH_ALL_CATEGORIES_BY_ID, FETCH_ALL_REQUESTED_CATEGORIES, FETCH_ALL_REQUESTED_CATEGORIES_BY_ID, FETCH_SEARCH_CATEGORIES, FETCH_SEARCH_REQUESTED_CATEGORIES, SET_LOADING, UPDATE_CATEGORIES, UPDATE_REQUESTED_CATEGORIES } from '../constants/actionTypeCategories';
import { createCategories, fetchCategories, deleteCategories, updateCategories, fetchCategoriesId, searchCategoriesId } from '../actions/actionCategories';

  function* getCategories(){
    yield put({type: SET_LOADING})
    const categories = yield call(fetchCategories)
    console.log(categories, 'productsSaga')
    yield put({type:FETCH_ALL_CATEGORIES, payload: {categories} })
  }
  function* getCategoriesId(id){
    yield put({type: SET_LOADING})
    const categories = yield call(fetchCategoriesId,id)
    console.log(categories, 'categories')
    yield put({type:FETCH_ALL_CATEGORIES_BY_ID, payload: {categories} })
  }
  function* getCategoriesKey(key){
    yield put({type: SET_LOADING})
    console.log(key)
    const categories = yield call(searchCategoriesId, key?.payload?.key)
    console.log(categories, 'categories')
    yield put({type:FETCH_SEARCH_CATEGORIES, payload: {categories} })
  }

  function* createCategorie({payload}){
    yield put({type: SET_LOADING})
    const categories = yield call(createCategories, payload?.payload)
  
    yield put({type: CREATE_CATEGORIES, payload: {categories}})
  }
  function* updateCategorie({payload}){
    yield put({type: SET_LOADING})
    const categories = yield call(updateCategories, payload)
    console.log(categories,'update')
    yield put({type: UPDATE_CATEGORIES, payload: {categories}})
  }

  function* deleteCategorie({payload}){
    console.log(payload, 'sagapayload')
    yield put({type: SET_LOADING})
    const categories = yield call(deleteCategories, payload?.payload)
    yield put({type: DELETE_CATEGORIES, payload: {categories}})
  }

  export default function* categoriesSaga() {
    yield takeEvery(FETCH_ALL_REQUESTED_CATEGORIES, getCategories)
    yield takeEvery(FETCH_ALL_REQUESTED_CATEGORIES_BY_ID, getCategoriesId)
    yield takeEvery(FETCH_SEARCH_REQUESTED_CATEGORIES, getCategoriesKey)
    yield takeEvery(CREATE_REQUESTED_CATEGORIES, createCategorie)
    yield takeEvery(UPDATE_REQUESTED_CATEGORIES, updateCategorie)
    yield takeEvery(DELETE_REQUESTED_CATEGORIES, deleteCategorie)
  }