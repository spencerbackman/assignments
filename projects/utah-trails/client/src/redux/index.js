import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import comments from './comments'
import trails from './trails'

export default createStore(combineReducers({
  trails,
  comments
}), applyMiddleware(thunk))
