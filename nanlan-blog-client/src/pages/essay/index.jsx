/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import List from "@/components/list";
import Recommed from "@/components/recommend";
import { getQueryString } from "@/utils";
import { EssayWrapper, EssayLeft, EssayRight } from "./style";
import { actionCreators } from "../home/store";
class Essay extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { changeHomeData } = this.props;
    changeHomeData(getQueryString("category"));
  }

  render() {
    return (
      <EssayWrapper>
        <EssayLeft>
          <List />
        </EssayLeft>
        <EssayRight>
          <Recommed />
        </EssayRight>
      </EssayWrapper>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData(categoryId) {
      dispatch(
        actionCreators.getHomeInfo({
          category: categoryId,
          pageNumber: 1,
          list: [],
        })
      );
    },
  };
};
export default connect("", mapDispatch)(Essay);
