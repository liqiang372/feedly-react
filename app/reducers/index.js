// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import counter from './counter'
import * as sidebar from './sidebar'
import { feedsByFilter } from './feeds'

const rootReducer = combineReducers({
  counter,
  ...sidebar,
  feedsByFilter,
  routing
});

export default rootReducer;
