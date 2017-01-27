// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sidebar, Segment, Header} from 'semantic-ui-react'
import SidebarView from './SidebarView'
import FHeader from './FHeader'
import FContent from './FContent'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div style={{"height": "100vh"}}>
        <Sidebar.Pushable as={Segment} style={{
          'border': 'none',
          'borderRadius': 0
        }}>
          <SidebarView />
          <Sidebar.Pusher>
              <FHeader />
              <FContent tyle={{"height": "100%"}} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
