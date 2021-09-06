import axios from "../../../server/axios";

const changeHomeData = (result) => ({
  type: "change_home_data",
  bannerList: "",
  articleList: result.articleList || [],
  isSkeletonLoading: result.isSkeletonLoading || false,
  currentPage: result.currentPage || 1,
  amount: result.amount, // 总条数
  totalPage: result.totalPage, // 总页数
});

export const getHomeInfo = (params) => {
  const _reqParmas = {
    pageSize: params.pageSize || 10,
    ...params,
  };
  delete _reqParmas.list;
  return (dispatch) => {
    dispatch(changeHomeData({ isSkeletonLoading: true }));
    axios
      .post("/api/article/list", _reqParmas)
      .then((res) => {
        const _articleList = params.list.concat(res.data);
        dispatch(
          changeHomeData({
            articleList: _articleList,
            isSkeletonLoading: false,
            currentPage: params.pageNumber,
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
  type: "change_back_show",
  isArriveBottom: params,
});
