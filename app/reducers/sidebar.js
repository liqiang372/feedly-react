import { TOGGLE_SIDEBAR } from '../actions/sidebar'


export function toggleSidebar(state = true, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state
    default:
      return state
  }
}
