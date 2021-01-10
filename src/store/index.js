import { combineReducers } from 'redux';
import { genReducers, genEffets } from './utils/func';
import { all } from 'redux-saga/effects';

export default function genReduxModel(models) {
  function *rootSaga() {
    yield all(
      [
        ...genEffets([...models]).map(saga => saga())
      ]
    )
  }

  const reducers = genReducers([...models]);
  const rootReducer = combineReducers({ ...reducers });
  return [rootReducer, rootSaga];
}



