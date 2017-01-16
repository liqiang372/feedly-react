import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FContent from '../components/FContent';
import * as actions from '../actions/sidebar';

const mapStateToProps = (state) => {
  const { selectedCategory, feedsByFilter } = state
  const { isFetching, lastUpdated, items: feeds} = feedsByFilter[selectedCategory] || {
    isFetching: true
  }
  return {
    selectedCategory,
    isFetching,
    feeds,
    lastUpdated
  }
}

export default connect(mapStateToProps)(FContent)
