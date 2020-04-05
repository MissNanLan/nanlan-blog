import React from 'react';
import { connect } from 'react-redux';
import {
 HomeWrapper, HomeBox, HomeLeft, HomeRight, BackTop
} from './style';
import Banner from './component/Banner';
import Recommend from '../../components/recommend';
import List from '../../components/list';
import { actionCreators } from './store';

class Home extends React.Component {
  componentDidMount() {
    const {changeHomeData} = this.props;
    changeHomeData();
    this.backTop();
  }

  componentWillUnmount() {
    const {changeBackTopShow} = this.props;
    window.removeEventListener('scroll', changeBackTopShow);
  }

  handleScrollTop() {
    this.scrollTo(0, 0);
  }

  backTop() {
    const {changeBackTopShow} = this.props;
    window.addEventListener('scroll', changeBackTopShow);
  }

  render() {
    const {isArriveBottom} = this.props;
    return (
      <HomeWrapper>
        <Banner />
        <HomeBox>
          <HomeLeft>
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
          </HomeRight>
        </HomeBox>
        {isArriveBottom ? (
          <BackTop onClick={this.handleScrollTop}>
            <span className="arrow iconfont">&#xe61b;</span>
          </BackTop>
        ) : (
          ''
        )}
      </HomeWrapper>
    );
  }
}

const mapProps = (props) => {
  return {
    isArriveBottom: props.home.get('isArriveBottom')
  };
};

const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      const reqParams = {
        pageSize: 10,
        pageNumber: 1
      };
      dispatch(actionCreators.getHomeInfo(reqParams));
    },
    changeBackTopShow() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleBackTopShow(true));
      } else {
        dispatch(actionCreators.toggleBackTopShow(false));
      }
    }
  };
};
export default connect(
  mapProps,
  mapDispatch
)(Home);
