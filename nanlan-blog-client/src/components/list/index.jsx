/* eslint-disable no-debugger */
/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Skeleton } from 'antd';
import {
  ArticleList,
  ArticleItem,
  ArticleContent,
  ArticleLeft,
  ArticleRight,
  ArticleOperation,
  ReadMore,
  NotAnyMore
} from './style';
import Opertaion from '../operation';
import { actionCreators } from '../../pages/home/store';

class List extends React.PureComponent {
  render() {
    const {
 list, isSkeletonLoading, handleReadMore, currentPage, totalPage
} = this.props;
    return (
      <div>
        <ArticleList>
          {list.map((item) => {
            const {
 like_count, comment_count, date, view_count
} = item;
            const commentObj = {
              like_count,
              comment_count,
              date,
              view_count,
            };
            return (
              <Link key={item._id} to={'/detail/' + item._id}>
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
                      <div className="title">{item.title}</div>
                      <p className="abstract">{item.abstract}</p>
                    </ArticleRight>
                  </ArticleContent>
                  <ArticleOperation>
                    <Opertaion data={commentObj} />
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
            onClick={() => {
              handleReadMore(currentPage, totalPage);
            }}
          >
            阅读更多
          </ReadMore>
          <Skeleton loading={isSkeletonLoading} active>j</Skeleton>
          {currentPage > totalPage ? (<NotAnyMore>没有更多了</NotAnyMore>) : ''}
        </ArticleList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.get('articleList'),
    currentPage: state.home.get('currentPage'),
    totalPage: state.home.get('totalPage'),
    isSkeletonLoading: state.home.get('isSkeletonLoading'),
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleReadMore(currentPage, totalPage) {
      if (currentPage <= totalPage) {
        dispatch(actionCreators.getHomeInfo({ pageNumber: currentPage + 1}));
        return '';
      }
      return 'notAnyMore';
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(List);
