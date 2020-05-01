import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


export default reducers => {

  const persistedReducer = persistReducer({
    key: 'root', // key to organize your reducers, you can put your application name here
    storage,     // set current application storage
    whitelist: [
      //put your reducers to store here
      //sample: 'auth', 'user'
    ],
  }, reducers)

  return persistedReducer;
}
