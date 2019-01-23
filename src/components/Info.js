import React, { Fragment } from 'react';
import NumberOfSelectedArticlesContainer from '../containers/NumberOfSelectedArticles.container';
import WeightContainer from '../containers/Weight.container';

const Info = () => (
  <Fragment>
    <NumberOfSelectedArticlesContainer />
    <WeightContainer />
  </Fragment>
);

export default Info;
