import React from 'react';
import { StarWrapper, StarBtn } from './style';

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
    console.log(111);
    const { isClickStar } = this.state;
    this.setState({
      isClickStar: !isClickStar
    });
  };

  render() {
    const {detail} = this.props;
    const {isClickStar} = this.state;
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

export default Star;
