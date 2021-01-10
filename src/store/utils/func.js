import { takeEvery } from 'redux-saga/effects';

export function genReducers(models) {
  const rs = models.reduce((acc, model) => {
    const { name, state:modelState, reducers } = model;
    const newReducer = (state=modelState, action) => 
      reducers[action.type] 
      ? reducers[action.type](state, action)
      : { ...state }
    return { ...acc, [name]: newReducer }
  }, {});
  return rs;
}

export function genEffets(models) {
  const es = models.reduce((acc, model) => {
    const { effects } = model;
    const allEffects = Object.keys(effects);
    const allSaga = allEffects.map(e => function *() {
      yield takeEvery(e, effects[e]);
    })
    return [...acc, ...allSaga];
  }, []);
  return es;
}
