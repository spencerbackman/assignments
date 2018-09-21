import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import comments from './commentredux'
import trails from './trailredux'

const store = createStore(combineReducers({
  trails,
  comments
}), applyMiddleware(thunk))

export default store 