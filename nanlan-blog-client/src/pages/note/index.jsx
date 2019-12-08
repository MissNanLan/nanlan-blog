import React from 'react';
import List from '../../components/list';
import Recommed from '../../components/recommend';
import { NoteWrapper, NoteLeft, NoteRight } from './style';

class Note extends React.PureComponent {
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
