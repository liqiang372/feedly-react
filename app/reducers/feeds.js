import { REQUEST_FEEDS, RECEIVE_FEEDS } from '../actions/sidebar'

const feeds = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch(action.type) {
    case REQUEST_FEEDS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_FEEDS:
      return {
        ...state,
        isFetching: false,
        items: action.feeds,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export const feedsByFilter = (state = {}, action) => {
  switch(action.type) {
    case REQUEST_FEEDS:
    case RECEIVE_FEEDS:
      return {
        ...state,
        [action.filter]: feeds(state[action.filter], action)
      }
    default:
      return state
  }
}
