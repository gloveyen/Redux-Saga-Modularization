import firebase from '../../services/firebase';

export const ACTION_TYPES = {
  QUERY_MISSIONS: 'QUERY_MISSIONS',
  QUERY_MISSIONS_ERROR: 'QUERY_MISSIONS_ERROR',
  SAVE_MISSIONS: 'SAVE_MISSIONS'
}

export const saveMissions = data => (
  {
    type: ACTION_TYPES.SAVE_MISSIONS,
    payload: data
  }
)

export const queryMissions = () => async dispatch => {
  const ref = firebase.firestore().collection('Missions');
  const snapshpt = await ref.get();
  const data = snapshpt.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  dispatch(saveMissions(data));
}
