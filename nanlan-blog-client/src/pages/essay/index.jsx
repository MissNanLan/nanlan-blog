/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import List from "@/components/list";
import Recommed from "@/components/recommend";
import { getQueryString } from "@/utils";
import { EssayWrapper, EssayLeft, EssayRight } from "./style";
import { actionCreators } from '../home/store';
class Essay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: "",
    };
  }

  componentDidMount() {
    console.log("props", this.props);
    this.setState({
      categoryId: getQueryString("category"),
    });
    const { changeHomeData } = this.props;
    // changeHomeData();
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
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo({ pageNumber: 1}));
    },
  };
};
export default connect(mapDispatch)(Essay);
