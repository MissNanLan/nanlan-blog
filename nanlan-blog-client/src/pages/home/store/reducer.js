import { fromJS } from 'immutable';

const defaultState = fromJS({
  bannerList: [],
  articleList: [],
  isArriveBottom: true,
  currentPage: 1,
  amount: 10,
  totalPage: 18
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        bannerList: action.bannerList,
        articleList: action.articleList
      });
    case 'change_back_show':
      return state.set('isArriveBottom', action.isArriveBottom);
    case 'page_change':
      return state.set('currentPage', action.currentPage);
    default:
      return state;
  }
};
