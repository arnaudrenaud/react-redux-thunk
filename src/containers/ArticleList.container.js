import { connect } from 'react-redux';

import ArticleList from '../components/ArticleList';

const mapStateToProps = ({ articles }) => ({
  articles,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
