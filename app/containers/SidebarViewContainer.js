import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SidebarView from '../components/SidebarView';
import * as actions from '../actions/sidebar';



const mapStateToProps = (state) => ({
  visible: state.toggleSidebar
})


export default connect(mapStateToProps)(SidebarView)
