import { connect } from 'react-redux';

import Weight from '../components/Weight';

const getSelectedArticlesTotalWeight = articles =>
  articles
    .filter(article => article.isSelected)
    .reduce((sum, article) => sum + article.weight, 0);

const mapStateToProps = ({ articles }) => ({
  value: getSelectedArticlesTotalWeight(articles),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weight);
