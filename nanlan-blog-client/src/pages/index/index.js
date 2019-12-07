import React from "react";
import Header from "../../components/header";
import { Content } from "./style";
import { withRouter } from "react-router";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Content>{this.props.children}</Content>
      </div>
    );
  }
}
export default withRouter(Index);
