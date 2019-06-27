import React from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../App';

const Article = ({ handleCheckboxChange, isSelected, name, weight }) => {
  const checkboxId = `checkbox-${name}`;

  return (
    <label
      data-selector="Article"
      htmlFor={checkboxId}
      style={{ display: 'block' }}
    >
      <input
        data-selector={`Article-input-${name}`}
        type="checkbox"
        id={checkboxId}
        onChange={handleCheckboxChange(name)}
        checked={isSelected}
      />
      {`${name} (${weight}kg)`}
    </label>
  );
};

const ArticleContainer = props => (
  <AppContext.Consumer>
    {({ toggleArticleSelection }) => (
      <Article {...props} handleCheckboxChange={toggleArticleSelection} />
    )}
  </AppContext.Consumer>
);

Article.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};

export { Article };
export default ArticleContainer;
