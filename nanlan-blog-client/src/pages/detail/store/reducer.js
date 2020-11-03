import { fromJS } from 'immutable';
import { GET_ARTICLE_DETAIL, UPDATE_ARTICLE_DETAIL } from './constants';

const defaultState = fromJS({
  title: '',
  content: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ARTICLE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    case UPDATE_ARTICLE_DETAIL:
      return state.setIn(['content', 'like_count'], action.content.value);
    default:
      return state;
  }
};
