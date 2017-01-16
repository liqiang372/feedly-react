import fetch from '../utils/fetch'
import * as URL from '../constants'

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const REQUEST_FEEDS = 'REQEUST_FEEDS'
export const RECEIVE_FEEDS = 'RECEIVE_FEEDS'

export const REQUEST_PROFILE = 'REQUEST_PROFILE'

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export const selectCateogry = (c) => ({
  type: SELECT_CATEGORY,
  category: c
})


export const requestFeeds = filter => ({
  type: REQUEST_FEEDS,
  filter
})

export const receiveFeeds = (filter, data) => ({
  type: RECEIVE_FEEDS,
  filter,
  feeds: data,
  receivedAt: Date.now()
})

// TODO
// Getting profile info first and pass id here

export const fetchFeeds = filter => dispatch => {
  dispatch(requestFeeds(filter))
  return fetch(URL.SOMETHING, 'GET')
    .then(json => dispatch(receiveFeeds(filter, json)))
}
