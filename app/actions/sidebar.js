import fetch from '../utils/fetch'
import * as URL from '../constants'

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  }
}

/**
 * FEEDS
 */
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const REQUEST_FEEDS = 'REQEUST_FEEDS'
export const RECEIVE_FEEDS = 'RECEIVE_FEEDS'

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

export const fetchFeeds = filter => (dispatch, getState) => {
  dispatch(requestFeeds(filter))
  const url = URL.STREAM_URL + getState().profile.id + '/category/' + filter
  return fetch(url, 'GET')
    .then(json => dispatch(receiveFeeds(filter, json)))
}

/**
 * PROFILE
 */
export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'

export const requestProfile = () => ({
  type: REQUEST_PROFILE
})

export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile: profile
})
export const fetchProfile = () => dispatch => {
  dispatch(requestProfile())
  return fetch(URL.PROFILE_URL, 'GET')
    .then(json => {console.log(json); dispatch(receiveProfile(json))})
}

/**
 * CATEGORY LIST
 */
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES
})

export const receiveCategories = (data) => ({
  type: RECEIVE_CATEGORIES,
  categories: data
})

export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  return fetch(URL.CATEGORIES_URL, 'GET')
    .then(json =>  dispatch(receiveCategories(json)))
}
