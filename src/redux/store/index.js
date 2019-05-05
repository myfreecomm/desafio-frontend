import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import history from '../../routes/history';

import createRootReducer from "../reducers";
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  createRootReducer(history),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
