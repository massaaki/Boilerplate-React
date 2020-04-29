import { all } from 'redux-saga/effects';

/**
 * Middleware sagas import
 */
import item from './reducerSample/sagas';


export default function* rootSaga() {
  return yield all([
    item,
  ])
}
