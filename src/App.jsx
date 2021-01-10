import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import genReduxModel from './store';
import mission from './models/missions'; 
import Home from './views/Home';


const [rootReducer, rootSaga] = genReduxModel([mission]);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    // applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(rootSaga);

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}



export default App;
