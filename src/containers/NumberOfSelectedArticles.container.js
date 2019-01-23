import { connect } from 'react-redux';

import NumberOfSelectedArticles from '../components/NumberOfSelectedArticles';

const getNumberOfSelectedArticles = articles =>
  articles.filter(article => article.isSelected).length;

const mapStateToProps = ({ articles }) => ({
  value: getNumberOfSelectedArticles(articles),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberOfSelectedArticles);
