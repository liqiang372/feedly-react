import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SidebarView from '../components/SidebarView';
import * as actions from '../actions/sidebar';



const mapStateToProps = (state) => ({
  visible: state.toggleSidebar,
  categories: state.categories.list
})

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SidebarView)
