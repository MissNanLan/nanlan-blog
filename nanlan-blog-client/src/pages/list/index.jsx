/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import List from "@/components/list";
import { getQueryString } from "@/utils";
import { ListWrapper, ListLeft, ListRight } from "./style";
import { actionCreators } from "../home/store";

class Lists extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { changeHomeData } = this.props;

    changeHomeData(getQueryString());
  }

  render() {
    return (
      <ListWrapper>
        <ListLeft>
          <List />
        </ListLeft>
      </ListWrapper>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData(params) {
      dispatch(
        actionCreators.getHomeInfo({
          pageNumber: 1,
          ...params,
          list: [],
        })
      );
    },
  };
};
export default connect("", mapDispatch)(Lists);
