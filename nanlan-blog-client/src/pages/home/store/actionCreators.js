import axios from '../../../server/axios';

const changeHomeData = (result) => ({
  type: 'change_home_data',
  bannerList: '',
  articleList: result.articleList || [],
  isSkeletonLoading: result.isSkeletonLoading || false,
  currentPage: result.currentPage || 1,
  amount: result.amount, // 总条数
  totalPage: result.totalPage, // 总页数
});

export const getHomeInfo = (params) => {
  const _reqParmas = {
    pageSize: 10,
    category: params.category,
    pageNumber: params.pageNumber
  };
  return (dispatch) => {
    dispatch(changeHomeData({ isSkeletonLoading: true }));
    axios
      .post('/api/article/list', _reqParmas)
      .then((res) => {
        const _articleList = params.list.concat(res.data.result);
        dispatch(
          changeHomeData({
            articleList: _articleList,
            isSkeletonLoading: false,
            currentPage: _reqParmas.pageNumber,
            amount: res.data.amount,
            totalPage: res.data.totalPage,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const toggleBackTopShow = (params) => ({
  type: 'change_back_show',
  isArriveBottom: params,
});
