import { connect } from 'react-redux';

import { toggleArticleSelection } from '../actionCreators';
import Article from '../components/Article';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { name }) => ({
  handleCheckboxChange: toggleArticleSelection(dispatch)(name),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
