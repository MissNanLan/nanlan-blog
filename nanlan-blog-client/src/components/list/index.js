import React from "react";
import { Link } from "react-router-dom";

import {
  ArticleList,
  ArticleItem,
  ArticleContent,
  ArticleLeft,
  ArticleRight,
  ArticleOperation,
  ReadMore
} from "./style";
import Opertaion from "../../components/operation";
import { connect } from "react-redux";
import { actionCreators } from "../../pages/home/store";

class List extends React.Component {
  render() {
    return (
      <ArticleList>
        {this.props.list.map((item, index) => {
          const { like_count, comment_count, date, view_count } = item;
          const commentObj = { like_count, comment_count, date, view_count };
          return (
            <Link key={index} to={"/detail/" + item._id}>
              <ArticleItem key={index}>
                <ArticleContent>
                  <ArticleLeft>
                    <img
                      src="https://www.xiahen.cn/wp-content/uploads/2019/09/2.jpg"
                      className="images"
                    ></img>
                  </ArticleLeft>

                  <ArticleRight>
                    <div className="title">{item.title}</div>
                    <p className="abstract">{item.abstract}</p>
                  </ArticleRight>
                </ArticleContent>
                <ArticleOperation>
                  <Opertaion data={commentObj}></Opertaion>
                  <span className="more">
                    阅读更多
                    <span className="arrow iconfont">&#xe61b;</span>
                  </span>
                </ArticleOperation>
              </ArticleItem>
            </Link>
          );
        })}
        <ReadMore
          onClick={() =>
            this.props.handleReadMore(
              this.props.currentPage,
              this.props.totalPage
            )
          }
        >
          阅读更多
        </ReadMore>
      </ArticleList>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.home.get("articleList"),
    currentPage: state.home.get("currentPage"),
    totalPage: state.home.get("totalPage")
  };
};

const mapDispatch = dispatch => {
  return {
    handleReadMore(currentPage, totalPage) {
      if (currentPage < totalPage) {
        dispatch(actionCreators.pageChange(currentPage + 1));
      } else {
        return <div>没有更多了</div>;
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatch)(List);
