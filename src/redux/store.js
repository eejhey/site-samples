import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';
import notificationsReducer from './notificationsReducer';

const reducers = combineReducers({
    notifications: notificationsReducer,
})

const store = createStore(reducers, applyMiddleware(promiseMiddleware));

export {store}