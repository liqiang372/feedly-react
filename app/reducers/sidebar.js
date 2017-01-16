import { TOGGLE_SIDEBAR, SELECT_CATEGORY, REQUEST_CATEGORIES, RECEIVE_CATEGORIES, RECEIVE_PROFILE } from '../actions/sidebar'

export function toggleSidebar(state = true, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state
    default:
      return state
  }
}

export const selectedCategory = (state = 'All', action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}


const category = (state = {
  isFetching: false,
  list: []
}, action) => {
  switch(action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        list: action.categories
      }
  }
}
export const categories = (state = {}, action) => {
  switch(action.type) {
    case REQUEST_CATEGORIES:
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        ...category(state['list'], action)
      }
    default:
      return state
  }
}

export const profile = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PROFILE:
      return {
        ...state,
        ...action.profile
      }
    default:
      return state
  }
}
