import { fromJS } from 'immutable';

const defaultState = fromJS({
  bannerList: [],
  articleList: [],
  isArriveBottom: true,
  isSkeletonLoading: true,
  currentPage: 1,
  amount: 10, // 总条数
  totalPage: 2, // 总页数
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        bannerList: action.bannerList,
        isSkeletonLoading: action.isSkeletonLoading,
        articleList: state.get('articleList').concat(action.articleList),
        currentPage: action.currentPage
      });
    case 'change_back_show':
      return state.set('isArriveBottom', action.isArriveBottom);
    default:
      return state;
  }
};
