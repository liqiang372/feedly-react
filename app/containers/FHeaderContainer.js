import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FHeader from '../components/FHeader';
import * as actions from '../actions/sidebar';


const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(FHeader)
