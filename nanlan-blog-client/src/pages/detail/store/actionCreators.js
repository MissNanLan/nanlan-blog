import reducer from "./reducer";
import * as actionCreators from "./actionCreators";
import * as constants from "./constants";
import axios from "axios";

const getArticleDetail = prarms => ({
  type: constants.GET_ARTICLE_DETAIL,
  content: prarms.content
});

export const getDetail = id => {
  return dispatch => {
    axios.post("/api/detail", { id: id }).then(res => {
      dispatch(
        getArticleDetail({
          content: res.data
        })
      );
    });
  };
};

export { reducer, actionCreators };
