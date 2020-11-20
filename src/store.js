import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducer/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga';

const sagaMiddleware = createSagaMiddleware(); // <-- saga

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware), // <-- apply middleware
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
