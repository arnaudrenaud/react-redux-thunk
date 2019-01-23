import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Info from './components/Info';
import ArticleListContainer from './containers/ArticleList.container';

class App extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  renderCouldNotFetchArticles = () => (
    <div data-selector="App-couldNotFetchArticles" style={{ marginTop: '1em' }}>
      Could not fetch articles.
    </div>
  );

  renderFetchingArticles = () => (
    <div data-selector="App-fetchingArticles" style={{ marginTop: '1em' }}>
      Loading…
    </div>
  );

  render() {
    const { areArticlesBeingFetched, couldNotFetchArticles } = this.props;

    return (
      <div className="App">
        {couldNotFetchArticles ? (
          this.renderCouldNotFetchArticles()
        ) : areArticlesBeingFetched ? (
          this.renderFetchingArticles()
        ) : (
          <Fragment>
            <ArticleListContainer />
            <Info />
          </Fragment>
        )}
      </div>
    );
  }
}

App.propTypes = {
  areArticlesBeingFetched: PropTypes.bool.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  couldNotFetchArticles: PropTypes.bool.isRequired,
};

export default App;
