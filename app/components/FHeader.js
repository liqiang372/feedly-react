import React, { Component } from 'react'
import { Menu, Icon, Button} from 'semantic-ui-react'

const styles = {
  menu: {
    'border': 'none',
    'borderRadius': '0'
  }
}

class FHeader extends Component {
  render() {
    const { toggleSidebar } = this.props
    return (
      <Menu style={styles.menu}>
        <Menu.Item onClick={ toggleSidebar }>
          <Icon name='content' />
        </Menu.Item>
      </Menu>
    )
  }
}

export default FHeader
