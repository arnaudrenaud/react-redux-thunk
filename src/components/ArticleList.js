import React from 'react';
import PropTypes from 'prop-types';

import { Article } from '.';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <Article
        isSelected={article.isSelected}
        key={article.name}
        name={article.name}
        weight={article.weight}
      />
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleList;
