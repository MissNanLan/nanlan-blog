import React from 'react';
import { connect } from 'react-redux';
import { BannerWrapper, BannerItem } from '../style';

class Banner extends React.PureComponent {
  render() {
    return (
      <BannerWrapper>
        <BannerItem>
          <img src="../../../static/images/banner1.jpeg" alt="" />
        </BannerItem>
      </BannerWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.get('bannerList'),
    name: state.home.get('name')
  };
};

export default connect(
  mapStateToProps,
  null
)(Banner);
