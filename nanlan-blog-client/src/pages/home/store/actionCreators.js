import axios from '../../../server/axios';

const changeHomeData = (result) => ({
  type: 'change_home_data',
  bannerList: '',
  articleList: result
});

export const getHomeInfo = (params) => {
  const _defaultParams = {
    pageSize: 10,
    pageNumber: 1
  };
  const _reqParmas = Object.assign(_defaultParams, params);
  return (dispatch) => {
    axios
      .post('/api/article/list', _reqParmas)
      .then((res) => {
        dispatch(changeHomeData(res.data));
      });
  };
};

export const toggleBackTopShow = (params) => ({
  type: 'change_back_show',
  isArriveBottom: params
});

export const pageChange = (params) => ({
  type: 'page_change',
  currentPage: params
});
