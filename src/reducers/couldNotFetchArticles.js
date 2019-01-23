const couldNotFetchArticles = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES__RESOLVE':
      return false;
    case 'FETCH_ARTICLES__REJECT':
      return true;
    default:
      return state;
  }
};

export default couldNotFetchArticles;
