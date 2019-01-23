import { connect } from 'react-redux';

import { fetchArticles } from './actionCreators';
import App from './App';

const mapStateToProps = ({
  areArticlesBeingFetched,
  couldNotFetchArticles,
}) => ({
  areArticlesBeingFetched,
  couldNotFetchArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: fetchArticles(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
