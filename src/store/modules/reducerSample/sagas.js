import {  all } from 'redux-saga/effects'; //just to remove warnings
// import { call, put, all, takeLatest } from 'redux-saga/effects';
// import api from '../../../services/api';

// import { addItemSuccess } from './actions';

// function* addItem(id) {
//   const response = yield call( api.get, `/some-request-here/${id}`);
//   yield put(addItemSuccess(response.data));
// }

export default all([
  //takeLatest('@Item/ADD_REQEUST', addItem),
]);
