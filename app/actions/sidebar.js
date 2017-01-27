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
export const CATEGORY_SELECT = 'CATEGORY_SELECT'
export const FEEDS_REQUEST = 'FEEDS_REQUEST'
export const FEEDS_SUCCESS = 'FEEDS_'

export const selectCateogry = (c) => ({
  type: CATEGORY_SELECT,
  category: c
})


export const requestFeeds = filter => ({
  type: FEEDS_REQUEST,
  filter
})

export const receiveFeeds = (filter, data) => ({
  type: FEEDS_SUCCESS,
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
export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_FAILURE = 'PROFILE_FAILURE'

export const requestProfile = () => ({
  type: PROFILE_REQUEST
})

export const receiveProfile = (profile) => ({
  type: PROFILE_SUCCESS,
  profile: profile
})

export const fetchProfile = () => dispatch => {
  dispatch(requestProfile())
  return fetch(URL.PROFILE_URL, 'GET')
    .then(json => { dispatch(receiveProfile(json)) })
    .catch(() => dispatch({
      type: PROFILE_FAILURE
    }))
}

/**
 * CATEGORY LIST
 */
export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST'
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'

export const requestCategories = () => ({
  type: CATEGORIES_REQUEST
})

export const receiveCategories = (data) => ({
  type: CATEGORIES_SUCCESS,
  categories: data
})

export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  return fetch(URL.CATEGORIES_URL, 'GET')
    .then(json =>  dispatch(receiveCategories(json)))
}
