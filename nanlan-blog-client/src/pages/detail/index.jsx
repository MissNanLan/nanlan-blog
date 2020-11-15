/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import { Tag } from "antd";
import {
  DetailWrapper,
  DetailSide,
  DetailLeft,
  DetailRight,
  DetailBottom,
  Header,
  Content,
  Tags,
} from "./style";
import Recommend from "@/components/recommend";
import Operation from "@/components/operation";
import Comment from "./component/comment";
import Star from "./component/star";
import { actionCreators } from "./store/index";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    const { getDetail, match } = props;
    getDetail(match.params.id);
  }

  clickStar() {
    this.isClickStar = !this.isClickStar;
  }

  render() {
    const { detail, histroy } = this.props;
    const { like_count, view_count, date, comment_count, tag } = detail;
    const commentObj = {
      like_count,
      view_count,
      date,
      comment_count,
    };
    return (
      <div>
        <DetailWrapper>
          <DetailLeft>
            <Header>{detail.title}</Header>
            <Operation data={commentObj} />
            <Content dangerouslySetInnerHTML={{ __html: detail.content }} />
            <Tags>
              {detail.tag &&
                detail.tag.map((it, index) => {
                  return (
                    <Tag key={index} color="#86b7b2">
                      {it}
                    </Tag>
                  );
                })}
            </Tags>
            <div class="star">
              <Star history={histroy} detail={detail} />
            </div>
          </DetailLeft>
          <DetailRight>
            <Recommend />
          </DetailRight>
          <DetailBottom>
            <Comment />
          </DetailBottom>
        </DetailWrapper>
      </div>
    );
  }
}
const mapProps = (props) => {
  return {
    detail: props.detail.get("content"),
  };
};

const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id));
    },
  };
};

export default connect(mapProps, mapDispatch)(Detail);
