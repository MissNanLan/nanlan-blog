import React from "react";
import { HomeWrapper, HomeBox, HomeLeft, HomeRight, BackTop } from "./style";
import Banner from "./component/Banner";
import Recommend from "../../components/recommend";
import List from "../../components/list";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends React.Component {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <Banner></Banner>
        <HomeBox>
          <HomeLeft>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
          </HomeRight>
        </HomeBox>
        {this.props.isArriveBottom ? (
          <BackTop onClick={this.handleScrollTop}>
            <span className="arrow iconfont">&#xe61b;</span>
          </BackTop>
        ) : (
          ""
        )}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.backTop();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeBackTopShow);
  }

  backTop() {
    window.addEventListener("scroll", this.props.changeBackTopShow);
  }
}

const mapProps = props => {
  return {
    isArriveBottom: props.home.get("isArriveBottom")
  };
};

const mapDispatch = dispatch => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    },
    changeBackTopShow(e) {
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
