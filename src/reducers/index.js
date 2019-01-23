import { combineReducers } from 'redux';
import areArticlesBeingFetched from './areArticlesBeingFetched';
import articles from './articles';
import couldNotFetchArticles from './couldNotFetchArticles';

export default combineReducers({
  areArticlesBeingFetched,
  articles,
  couldNotFetchArticles,
});
