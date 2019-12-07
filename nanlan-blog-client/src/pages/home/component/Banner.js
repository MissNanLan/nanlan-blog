import React from "react";
import { BannerWrapper, BannerItem } from "../style";
import { connect } from "react-redux";

class Banner extends React.Component {
  render() {
    return (
      <BannerWrapper>
        <BannerItem>
          {/* <img src="../../../static/images/banner1.jpeg" /> */}
        </BannerItem>
      </BannerWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.home.get("bannerList"),
    name: state.home.get("name")
  };
};

export default connect(
  mapStateToProps,
  null
)(Banner);
