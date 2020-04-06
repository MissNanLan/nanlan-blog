import axios from '../../../server/axios';

const changeHomeData = (result) => ({
  type: 'change_home_data',
  bannerList: '',
  articleList: result.articleList,
  isSkeletonLoading: result.isSkeletonLoading,
  currentPage: result.currentPage || 1
});

export const getHomeInfo = (params) => {
  const _defaultParams = {
    pageSize: 10,
    pageNumber: 1,
  };
  const _reqParmas = Object.assign(_defaultParams, params);
  console.log(_reqParmas);
  return (dispatch) => {
    dispatch(changeHomeData({ articleList: [], isSkeletonLoading: true, currentPage: _reqParmas.pageNumber}));
    axios.post('/api/article/list', _reqParmas).then((res) => {
      dispatch(
        changeHomeData({ articleList: res.data, isSkeletonLoading: false, currentPage: _reqParmas.pageNumber})
      );
    });
  };
};

export const toggleBackTopShow = (params) => ({
  type: 'change_back_show',
  isArriveBottom: params,
});
