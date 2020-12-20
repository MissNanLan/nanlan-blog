/* eslint-disable  */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Tag, Pagination } from "antd";
import {
  ArticleList,
  ArticleItem,
  ArticleContent,
  ArticleLeft,
  ArticleRight,
  ArticleOperation,
  PaginationContent,
  ReadMore,
  NotAnyMore,
} from "./style";
import Opertaion from "../operation";
import { actionCreators } from "../../pages/home/store";

class List extends React.PureComponent {
  render() {
    const { list, handleReadMore, currentPage, amount, totalPage } = this.props;
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
                        {item.tag.map((it, index) => {
                          return (
                            <div>
                              <Tag color="success" key={it.id}>{it.name}</Tag>
                            </div>
                          );
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

          <PaginationContent>
            <Pagination
              total={amount}
              showTotal={(total) => `总共 ${total} 条`}
              onChange={(page, pageSize) => {
                handleReadMore(page, pageSize, []);
              }}
            />
          </PaginationContent>

          {/* <ReadMore
            currentPage={currentPage}
            totalPage={totalPage}
            onChange={(page, pageSize) => {
              handleReadMore(page, pageSize, list);
            }}
          >
            阅读更多
          </ReadMore> */}
          {/* <Skeleton loading={isSkeletonLoading} active></Skeleton> */}
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
    amount: state.home.get("amount"),
    isSkeletonLoading: state.home.get("isSkeletonLoading"),
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleReadMore(currentPage, totalPage, list) {
      if (currentPage <= totalPage) {
        dispatch(actionCreators.getHomeInfo({ pageNumber: currentPage, list }));
        return "";
      }
      return "notAnyMore";
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(List);
