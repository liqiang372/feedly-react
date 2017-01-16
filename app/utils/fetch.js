import fetch from 'isomorphic-fetch'
import ACCESS_TOKEN from '../secret'
export default (url, method) => (
  fetch(url, {
    method: method,
    credentials: 'include',
    headers: {
      'Authorization': `OAuth [${ACCESS_TOKEN}]`
    }
  })
  .then(response => response.json())
)
