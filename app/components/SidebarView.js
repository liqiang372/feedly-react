import React, { Component } from 'react'
import { Sidebar, Menu, Button, Icon } from 'semantic-ui-react'

const styles = {
  sideBar: {
    'width': '260px',
    'border': 'none',
    'borderRadius': '0',
    'paddingTop': '20px'
  },
  addNew: {
    'fontSize': '24px',
    'padding': '5px',
    'marginTop': '40px'
  },
  heading: {
    'fontSize': '12px',
    'color': '#868686',
    'textAlign': 'left'
  },
  list: {
    'fontSize': '1.2em',
    'textAlign': 'left'
  }
}

class SidebarView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Sidebar as={Menu} animation='push' visible={this.props.visible}
              icon='labeled' vertical
              style={styles.sideBar}>
        <Menu.Item name='Today'>
          <p><Icon name='wait'/> Today</p>
        </Menu.Item>
        <Menu.Item name='later'>
          <p><Icon name='remove bookmark' /> Save for later</p>
        </Menu.Item>
        <Menu.Item name='addNew'>
          <Button fluid style={styles.addNew}>+</Button>
        </Menu.Item>
        <Menu.Item name="feeds" style={styles.heading}>
          <Menu.Header>
            PERSONAL FEEDS <Icon name="setting" className='f-icon float-right'/>
          </Menu.Header>
          <Menu.Menu>
            <Menu.Item>
              <p style={styles.list}><Icon name='content' /> All</p>
            </Menu.Item>
            <Menu.Item>
              <p style={styles.list}><Icon name='angle right' /> Blog </p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Sidebar>
    )
  }
}

export default SidebarView