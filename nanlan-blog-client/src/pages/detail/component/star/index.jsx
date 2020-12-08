/* eslint-disable  */
import React from "react";
import { message } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { StarWrapper, StarBtn } from "./style";
import isLogin from "../../../../static/js/util";
import server from "../../../../server";
import { actionCreators } from "../../store/index";

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickStar: false,
      star_status: false,
      like_count: 0,
    };
    // this.handleClickStar = window._.throttle(this.clickStar, 100, {
    //   trailing: false,
    // });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.detail.like_count !== prevState.like_count) {
      return {
        like_count: nextProps.detail.like_count,
        star_status: nextProps.detail.star_status,
        isClickStar: nextProps.detail.star_status,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.detail.like_count !== prevState.like_count) {
  //     Object.keys(this.state).forEach(() => {
  //       this.setState({
  //         like_count: prevProps.detail.like_count,
  //         isClickStar: prevProps.detail.star_status
  //       });
  //     });
  //   }
  // }

  clickStar = () => {
    if (!isLogin) {
      message.warning("你还没有登录");
      const { history } = this.props;
      history.push("/login");
    } else {
      const { detail } = this.props;
      this.setState({
        isClickStar: !this.state.isClickStar,
      });
      if (this.state.isClickStar) {
        // 点赞
        server.detailServer.star({ articleId: detail._id }).then((res) => {
          this.props.updateDetail(res.data.like_count, true);
        });
      } else {
        // 取消点赞
        server.detailServer
          .cancelStar({ articleId: detail._id })
          .then((res) => {
            this.props.updateDetail(res.data.like_count, false);
          });
      }
    }
  };

  render() {
    const { detail } = this.props;
    return (
      <StarWrapper
        // className={this.state.isClickStar ? 'active' : ''}
        onClick={this.clickStar}
      >
        <StarBtn primary>
          {detail.star_status ? (
            <HeartFilled style={{ fontSize: "26px", color: "#86b7b2" }} />
          ) : (
            <HeartOutlined />
          )}
          <div>{detail.like_count}</div>
        </StarBtn>
      </StarWrapper>
    );
  }
}

const mapProps = (props) => {
  return {
    detail: props.detail.get("content"),
  };
};

const mapDispatch = (dispatch, props) => {
  return {
    updateDetail(likeCount, starStatus) {
      const { detail } = props;
      detail.like_count = likeCount;
      detail.star_status = starStatus;
      dispatch(actionCreators.updateDetail(detail));
    },
  };
};

export default withRouter(connect(mapProps, mapDispatch)(Star));
