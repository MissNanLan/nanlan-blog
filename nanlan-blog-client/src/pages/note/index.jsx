/* eslint-disable */
import React from "react";
import { getQueryString } from "@/utils";
import { connect } from "react-redux";
import List from "@/components/list";
import Recommed from "@/components/recommend";
import { NoteWrapper, NoteLeft, NoteRight } from "./style";
import { actionCreators } from "../home/store";
class Note extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { changeHomeData } = this.props;
    changeHomeData(getQueryString("category"));
  }

  render() {
    return (
      <NoteWrapper>
        <NoteLeft>
          <List />
        </NoteLeft>
        <NoteRight>
          <Recommed />
        </NoteRight>
      </NoteWrapper>
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

export default connect("", mapDispatch)(Note); ;
