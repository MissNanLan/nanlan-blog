/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-debugger */
import React from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import axios from 'axios';
import { StarWrapper, StarBtn } from './style';
import isLogin from '../../../../static/js/util';

class Star extends React.Component {
  constructor() {
    super();
    this.state = {
      isClickStar: false
    };
    this.handleClickStar = window._.throttle(this.clickStar, 100, {
      trailing: false
    });
  }

  clickStar = () => {
    if (!isLogin) {
      message.warning('你还没有登录');
      const { history } = this.props;
      history.push('/login');
    } else {
      const { detail } = this.props;
      const articleId = detail._id;
      const { isClickStar } = this.state;
      this.setState({
        isClickStar: !isClickStar
      });
      if (!isClickStar) {
        axios.post('/api/article/' + articleId + '/star').then(() => {});
      } else {
        axios.delete('/api/article/' + articleId + '/star').then(() => {});
      }
    }
  };

  handleClickStar = () => {
    window._.throttle(this.clickStar, 100, {
      trailing: false
    });
  };


  render() {
    const { detail } = this.props;
    return (
      <StarWrapper
        className={this.state.isClickStar ? 'active' : ''}
        onClick={this.handleClickStar}
      >
        <StarBtn>
          <div className="iconfont">&#xe644;</div>
          <span>{detail.like_count}</span>
        </StarBtn>
      </StarWrapper>
    );
  }
}

const mapProps = (props) => {
  return {
    detail: props.detail.get('content')
  };
};

export default connect(mapProps)(Star);

// export default withRouter(Star);
