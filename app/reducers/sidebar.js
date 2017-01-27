import { TOGGLE_SIDEBAR, CATEGORY_SELECT, CATEGORIES_REQUEST, CATEGORIES_SUCCESS, PROFILE_SUCCESS } from '../actions/sidebar'

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
    case CATEGORY_SELECT:
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
    case CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.categories
      }
  }
}
export const categories = (state = {}, action) => {
  switch(action.type) {
    case CATEGORIES_REQUEST:
    case CATEGORIES_SUCCESS:
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
    case PROFILE_SUCCESS:
      return {
        ...state,
        ...action.profile
      }
    default:
      return state
  }
}
