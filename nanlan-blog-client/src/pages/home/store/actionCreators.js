import axios from 'axios';

const changeHomeData = (result) => ({
  type: 'change_home_data',
  bannerList: '',
  articleList: result
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios
      .post('/api/article', { pageSize: 10, pageNumber: 1 })
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
