import { StarWrapper, StarBtn } from "./style";
import throttle from "lodash/throttle";
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

  render() {
    const detail = this.props.detail;
    return (
      <StarWrapper
        className={this.state.isClickStar ? "active" : ""}
        onClick={this.handleClickStar}
      >
        <StarBtn>
          <div className="iconfont">&#xe644;</div>
          <span>{detail.like_count}</span>
        </StarBtn>
      </StarWrapper>
    );
  }

  clickStar = () => {
    console.log(111);
    const { isClickStar } = this.state;
    this.setState({
      isClickStar: !isClickStar
    });
  };
}

export default Star;
