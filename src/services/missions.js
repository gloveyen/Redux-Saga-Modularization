import firebase from './firebase';

export async function fetchMissions() {
  const ref = firebase.firestore().collection('Missions');
  const snapshpt = await ref.get();
  const data = snapshpt.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}
