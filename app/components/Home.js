// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sidebar, Segment, Header} from 'semantic-ui-react'
import SidebarViewContainer from '../containers/SidebarViewContainer'
import FHeaderContainer from '../containers/FHeaderContainer'
import FContentContainer from '../containers/FContentContainer'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div style={{"height": "100vh"}}>
        <Sidebar.Pushable as={Segment} style={{
          'border': 'none',
          'borderRadius': 0
        }}>
          <SidebarViewContainer />
          <Sidebar.Pusher>
              <FHeaderContainer />
              <FContentContainer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
