/* eslint-disable  */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Tag } from "antd";
import {
  ArticleList,
  ArticleItem,
  ArticleContent,
  ArticleLeft,
  ArticleRight,
  ArticleOperation,
  ReadMore,
  NotAnyMore,
} from "./style";
import Opertaion from "../operation";
import { actionCreators } from "../../pages/home/store";

class List extends React.PureComponent {
  render() {
    const { list, handleReadMore, currentPage, totalPage } = this.props;
    return (
      <div>
        <ArticleList>
          {list.map((item) => {
            const {
              like_count,
              comment_count,
              date,
              view_count,
              category,
            } = item;
            const commentObj = {
              like_count,
              comment_count,
              date,
              view_count,
              category,
            };
            return (
              <Link key={item._id} to={"/detail/" + item._id}>
                <ArticleItem key={item._id}>
                  <ArticleContent>
                    <ArticleLeft>
                      <img
                        src="https://www.xiahen.cn/wp-content/uploads/2019/09/2.jpg"
                        className="images"
                        alt=""
                      />
                    </ArticleLeft>
                    <ArticleRight>
                      <div className="title">
                        {item.title}
                        {item.tag.map((it) => {
                          return <Tag color="success">{it.name}</Tag>;
                        })}
                      </div>
                      <p className="abstract">{item.abstract}</p>
                    </ArticleRight>
                  </ArticleContent>
                  <ArticleOperation>
                    <Opertaion data={commentObj} />
                  </ArticleOperation>
                </ArticleItem>
              </Link>
            );
          })}
          <ReadMore
            currentPage={currentPage}
            totalPage={totalPage}
            onClick={() => {
              handleReadMore(currentPage, totalPage, list);
            }}
          >
            阅读更多
          </ReadMore>
          {/* <Skeleton loading={isSkeletonLoading} active></Skeleton> */}
          {currentPage > totalPage ? <NotAnyMore>没有更多了</NotAnyMore> : ""}
        </ArticleList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.get("articleList"),
    currentPage: state.home.get("currentPage"),
    totalPage: state.home.get("totalPage"),
    isSkeletonLoading: state.home.get("isSkeletonLoading"),
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleReadMore(currentPage, totalPage, list) {
      if (currentPage <= totalPage) {
        dispatch(
          actionCreators.getHomeInfo({ pageNumber: currentPage + 1, list })
        );
        return "";
      }
      return "notAnyMore";
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(List);
