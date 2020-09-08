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
  // constructor(props) {
  //   super(props);
  //   this.handleScrollTop = this.handleScrollTop.bind(this);
  // }
  componentDidMount() {
    const { changeHomeData } = this.props;
    changeHomeData();
    this.backTop();
  }

  componentWillUnmount() {
    const { changeBackTopShow } = this.props;
    window.removeEventListener('scroll', changeBackTopShow);
  }

  handleScrollTop() {
    console.log(this);
    window.scrollTo(0, 0);
  }

  backTop() {
    const { changeBackTopShow } = this.props;
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
      dispatch(actionCreators.getHomeInfo({ pageNumber: 1, list: []}));
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
