import React from "react";
import List from "../../components/list";
import Recommed from "../../components/recommend";
import { NoteWrapper, NoteLeft, NoteRight } from "./style";
class Note extends React.Component {
  render() {
    return (
      <NoteWrapper>
        <NoteLeft>
          <List></List>
        </NoteLeft>
        <NoteRight>
          <Recommed></Recommed>
        </NoteRight>
      </NoteWrapper>
    );
  }
}

export default Note;
