/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-debugger */
import React from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { StarWrapper, StarBtn } from './style';
import isLogin from '../../../../static/js/util';
import server from '../../../../server';
import { actionCreators } from '../../store/index';

class Star extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isClickStar: false,
      like_count: props.detail && props.detail.like_count,
      star_status: props.detail && props.detail.star_status,
    };
    this.handleClickStar = window._.throttle(this.clickStar, 100, {
      trailing: false,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.detail.like_count !== prevState.like_count) {
      return {
        like_count: nextProps.detail.like_count,
        star_status: nextProps.detail.star_status,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.detail.like_count !== prevState.like_count) {
      Object.keys(this.state).forEach(() => {
        this.setState({
          like_count: prevProps.detail.like_count,
          star_status: prevProps.detail.star_status,
        });
      });
    }
  }

  clickStar = () => {
    if (!isLogin) {
      message.warning('你还没有登录');
      const { history } = this.props;
      history.push('/login');
    } else {
      // const { detail } = this.props;
      // const articleId = detail._id;
      const { isClickStar } = this.state;
      this.setState({
        isClickStar: !isClickStar,
      });
      if (!isClickStar) {
        // 点赞
        server.detailServer
          .star({ articleId: '5e088eec2c5f1040b3f6cbea' })
          .then((res) => {
            this.props.updateDetail(res.data.like_count);
          });
      } else {
        // 取消点赞
        server.detailServer
          .cancelStar({ articleId: '5e088eec2c5f1040b3f6cbea' })
          .then((res) => {
            this.props.updateDetail(res.data.like_count);
          });
      }
    }
  };

  handleClickStar = () => {
    window._.throttle(this.clickStar, 100, {
      trailing: false,
    });
  };

  render() {
    return (
      <StarWrapper
        className={this.state.isClickStar ? 'active' : ''}
        onClick={this.handleClickStar}
      >
        <StarBtn primary>
          {this.state.star_status ? (
            <HeartFilled style={{ fontSize: '26px', color: '#86b7b2' }} />
          ) : (
            <HeartOutlined />
          )}
          <div>{this.state.like_count}</div>
        </StarBtn>
      </StarWrapper>
    );
  }
}

const mapProps = (props) => {
  return {
    detail: props.detail.get('content'),
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateDetail(params) {
      dispatch(
        actionCreators.updateDetail({ key: 'like_count', value: params })
      );
    },
  };
};

export default connect(mapProps, mapDispatch)(Star);
// export default withRouter(Star);
