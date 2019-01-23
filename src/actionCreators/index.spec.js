import fetchMock from 'fetch-mock';

import { fetchArticles } from '.';

describe('actionCreators', () => {
  describe('fetchArticles', () => {
    describe('when fetch errors', () => {
      const dispatch = jest.fn();
      fetchMock.mock(
        'https://packing-list-weight-api.herokuapp.com/articles',
        () => {
          throw new Error('');
        }
      );

      it('should dispatch action FETCH_ARTICLES__REJECT', async () => {
        await fetchArticles(dispatch)();
        expect(dispatch).toHaveBeenCalledWith({
          type: 'FETCH_ARTICLES__REJECT',
        });
      });
    });
  });
});
