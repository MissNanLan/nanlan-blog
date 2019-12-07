import React from "react";
import {
  DetailWrapper,
  DetailSide,
  DetailLeft,
  DetailRight,
  DetailBottom,
  Header,
  Content
} from "./style";
import Recommend from "../../components/recommend";
import Operation from "../../components/operation";
import Comment from "./component/comment";
import Star from "./component/star";
import { connect } from "react-redux";
import { actionCreators } from "./store/actionCreators";

class Detail extends React.Component {
  render() {
    const detail = this.props.detail;
    const { like_count, comment_count, date, view_count } = detail;
    const commentObj = { like_count, comment_count, date, view_count };
    return (
      <div>
        <DetailSide>
          <Star detail={detail}></Star>
        </DetailSide>
        <DetailWrapper>
          <DetailLeft>
            <Header>{detail.title}</Header>
            <Operation data={commentObj}></Operation>
            <Content>{detail.content}</Content>
          </DetailLeft>
          <DetailRight>
            <Recommend></Recommend>
          </DetailRight>
          <DetailBottom>
            <Comment></Comment>
          </DetailBottom>
        </DetailWrapper>
      </div>
    );
  }
  clickStar() {
    this.isClickStar = !this.isClickStar;
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapProps = props => {
  return {
    detail: props.detail.get("content")
  };
};

const mapDispatch = dispatch => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id));
    }
  };
};

export default connect(mapProps, mapDispatch)(Detail);
