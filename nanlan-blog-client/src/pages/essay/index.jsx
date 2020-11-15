import React from 'react';
import List from '@/components/list';
import Recommed from '@/components/recommend';
import { EssayWrapper, EssayLeft, EssayRight } from './style';

class Essay extends React.PureComponent {
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

export default Essay;
