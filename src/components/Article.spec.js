import { shallow } from 'enzyme';
import React from 'react';

import { Article } from './Article';

describe('Article', () => {
  describe('when passed selected article', () => {
    const isSelected = true;
    const name = 'Shoes';
    const weight = 3;
    const handleCheckboxChange = () => null;

    it('renders checkbox checked', () => {
      const articleWrapper = shallow(
        <Article
          isSelected={isSelected}
          name={name}
          weight={weight}
          handleCheckboxChange={handleCheckboxChange}
        />
      );
      expect(
        articleWrapper
          .find(`[data-selector="Article-input-${name}"]`)
          .prop('checked')
      ).toBe(isSelected);
    });
  });
});
