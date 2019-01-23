import couldNotFetchArticles from './couldNotFetchArticles';

describe('couldNotFetchArticles', () => {
  describe('when passed action with type FETCH_ARTICLES__RESOLVE', () => {
    it('returns false', () => {
      expect(
        couldNotFetchArticles(undefined, { type: 'FETCH_ARTICLES__RESOLVE' })
      ).toEqual(false);
    });
  });

  describe('when passed action with type FETCH_ARTICLES__REJECT', () => {
    it('returns true', () => {
      expect(
        couldNotFetchArticles(undefined, { type: 'FETCH_ARTICLES__REJECT' })
      ).toEqual(true);
    });
  });

  describe('when passed action with other type', () => {
    it('returns passed state', () => {
      const state = true;
      expect(couldNotFetchArticles(state, { type: '' })).toEqual(state);
    });
  });
});
