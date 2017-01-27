import React, { Component } from 'react'
import { Menu, Icon, Button} from 'semantic-ui-react'


/* import for containers */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/sidebar';


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

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(FHeader)
