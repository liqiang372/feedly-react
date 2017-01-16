// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import counter from './counter'
import { toggleSidebar, selectedCategory } from './sidebar'
import { feedsByFilter } from './feeds'

const rootReducer = combineReducers({
  counter,
  toggleSidebar,
  selectedCategory,
  feedsByFilter,
  routing
});

export default rootReducer;
