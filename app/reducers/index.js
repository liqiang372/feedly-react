// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import counter from './counter'
import { toggleSidebar } from './sidebar'

const rootReducer = combineReducers({
  counter,
  toggleSidebar,
  routing
});

export default rootReducer;
