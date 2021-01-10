import { call, put } from 'redux-saga/effects';
import { fetchMissions } from '../services/missions';


const model = {
  name: 'mission',
  state: {
    missions: []
  },
  effects: {
    *queryMissions() {
      const data = yield call(fetchMissions);
      yield put({ type: 'saveMission', payload: data });
    }
  },
  reducers: {
    saveMission: (state, action) => {
      return { ...state, missions: [...action.payload] };
    },
    resetMission: state => {
      return { ...state, missions: [] }
    }
  }
}

export default model;
