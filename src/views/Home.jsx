import { connect } from 'react-redux';
// import { ACTION_TYPES } from '../store/saga/actions';
// import { queryMissions } from '../store/thunk/actions';

function Home({ missions=[], queryMissions, saveMission, dispatch }) {
  function handleClick() {
    // saveMission([{id:'t1', title:'test'}]);
    queryMissions();
  }

  function handleReset() {
    dispatch({type: 'resetMission'});
  }

  const renderMissions = missions.map(doc => (<li key={doc.id} >{doc.title}</li>));

  return (
    <>
      <button onClick={handleClick}>Fetch Missions</button>
      <button onClick={handleReset} >Reset</button>
      {renderMissions}
    </>
  );
}

const mapStateToProps = ({ mission }) => {
  const { missions } = mission;
  return {
    missions
  }
}

const mapDispatchToProps = dispatch => (
  {
    // queryMissions: payload => {dispatch(queryMissions(payload))}
    // queryMissions: () => { dispatch({ type: ACTION_TYPES.QUERY_MISSIONS }); }
    queryMissions: () => {dispatch({type: 'queryMissions'})},
    saveMission: (data) => { dispatch({ type: 'saveMission', payload: data }) },
    dispatch
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
