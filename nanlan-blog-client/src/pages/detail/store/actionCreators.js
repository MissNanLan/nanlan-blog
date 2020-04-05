import axios from '../../../server/axios';
import reducer from './reducer';
import * as constants from './constants';

const getArticleDetail = (prarms) => ({
  type: constants.GET_ARTICLE_DETAIL,
  content: prarms.content
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.post('/api/article/detail', { id }).then((res) => {
      dispatch(
        getArticleDetail({
          content: res.data
        })
      );
    });
  };
};

export { reducer };
