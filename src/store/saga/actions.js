import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchMissions } from './services';

export const ACTION_TYPES = {
  QUERY_MISSIONS: 'QUERY_MISSIONS',
  QUERY_MISSIONS_ERROR: 'QUERY_MISSIONS_ERROR',
  SAVE_MISSIONS: 'SAVE_MISSIONS'
}

function *queryMissions() {
  const data = yield call(fetchMissions);
  yield put({ type: ACTION_TYPES.SAVE_MISSIONS, payload: data });
} 

function *mySaga() {
  yield takeEvery(ACTION_TYPES.QUERY_MISSIONS, queryMissions);
}

export default mySaga;
