import React from "react";
import List from "../../components/list";
import Recommed from "../../components/recommend";
import { EssayWrapper, EssayLeft, EssayRight } from "./style";
class Essay extends React.Component {
  render() {
    return (
      <EssayWrapper>
        <EssayLeft>
          <List></List>
        </EssayLeft>
        <EssayRight>
          <Recommed></Recommed>
        </EssayRight>
      </EssayWrapper>
    );
  }
}

export default Essay;
