import { TOGGLE_SIDEBAR, SELECT_CATEGORY } from '../actions/sidebar'

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
