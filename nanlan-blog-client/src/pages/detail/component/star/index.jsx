import React from 'react';
import { message } from 'antd';
import { withRouter } from 'react-router';
import axios from 'axios';
import { StarWrapper, StarBtn } from './style';
import isLogin from '../../../../static/js/util';

class Star extends React.Component {
  constructor(props) {
    super(props);
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
      const { isClickStar } = this.state;
      // const articleId = props.detail.id;
      const articleId = '5dd0cf93e30bf81fe6e4610c';
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

  render() {
    console.log(this.props);
    const { detail } = this.props;
    const { isClickStar } = this.state;
    return (
      <StarWrapper
        className={isClickStar ? 'active' : ''}
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

export default withRouter(Star);
