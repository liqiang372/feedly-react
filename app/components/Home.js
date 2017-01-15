// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sidebar, Segment, Menu, Header, Icon, Button} from 'semantic-ui-react'
import "./Home.css"

const styles = {
  sideBar: {
    'width': '200px',
    'border': 'none',
    'borderRadius': 'none'
  },
  addNew: {
    'fontSize': '24px',
    'padding': '5px'
  }
}
export default class Home extends Component {
  render() {
    return (
      <div style={{"height": "100vh"}}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' visible={true}
                  icon='labeled' vertical
                  className="f-sidebar">
            <Menu.Item name='addNew'>
              <Button fluid style={styles.addNew}>+</Button>
            </Menu.Item>

          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>hello there</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    );
  }
}
