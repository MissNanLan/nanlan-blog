/* eslint-disable */
import React from "react";
import { getQueryString } from "@/utils";
import List from "@/components/list";
import Recommed from "@/components/recommend";
import { NoteWrapper, NoteLeft, NoteRight } from "./style";
class Note extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(getQueryString("category"));
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

export default Note;
