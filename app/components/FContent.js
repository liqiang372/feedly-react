import React, { Component } from 'react'
import { Menu, Icon, Container, Header} from 'semantic-ui-react'
import fetch from '../utils/fetch'
import ACCESS_TOKEN from '../secret'
import * as URL from '../constants'
import { fetchFeeds } from '../actions/sidebar'

class FContent extends Component {
  constructor(props) {
    super(props)

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory != this.props.selectedCategory) {
      const { dispatch, selectedCategory } = this.props
      dispatch(fetchFeeds(nextProps.selectedCategory))
    }
  }
  render() {
    const { feeds } = this.props
    let feedsList = <p> nothing is here</p>
    if (feeds && feeds.items && feeds.items.length > 0) {
      feedsList = feeds.items.map((f,index) => (
        <ul>
          <li key={index}> {f.title}</li>
        </ul>
      ))
    }
    return (
      <Container>
        <Header>{ feedsList }</Header>
      </Container>
    )
  }
}

export default FContent
