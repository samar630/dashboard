import { put, call,takeLatest, takeEvery } from 'redux-saga/effects';
import { createUser, deleteUser, fetchUser, login } from '../actions/actionAuth';
import { CREATE_REQUESTED_USER, CREATE_USER, DELETE_REQUESTED_USER, DELETE_USER, FETCH_ALL_REQUESTED_USER, FETCH_ALL_USER, LOGIN, LOGIN_REQUESTED, SET_LOADING } from '../constants/actionAuth';

import { forwardRef } from 'react';
function* fetchUsers(){
    yield put({type: SET_LOADING})
    const categories = yield call(fetchUser)
    console.log(categories, 'productsSaga')
    yield put({type:FETCH_ALL_USER, payload: {categories} })
  }

  function* createUsers({payload}){
    yield put({type: SET_LOADING})
    const users = yield call(createUser, payload?.users)

    console.log(users,'newUser')

    
    yield put({type: CREATE_USER, payload: {users}})
  }
  function* loginUsers({payload}){
    yield put({type: SET_LOADING})
    const user = yield call(login, payload?.payload)
    console.log(user,'newUser')
    yield put({type: LOGIN, payload: {user}})
  }

  function* deleteUsers({payload}){
    console.log(payload, 'sagapayload')
    yield put({type: SET_LOADING})
    const user = yield call(deleteUser, payload?.payload)
    yield put({type: DELETE_USER, payload: {user}})
  }

  export default function* userSaga() {
    yield takeEvery(FETCH_ALL_REQUESTED_USER,fetchUsers )
    yield takeEvery(CREATE_REQUESTED_USER, createUsers)
    yield takeEvery(LOGIN_REQUESTED, loginUsers)
    yield takeEvery(DELETE_REQUESTED_USER, deleteUsers)
  }