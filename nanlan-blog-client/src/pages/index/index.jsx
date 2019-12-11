import React from 'react';
import { withRouter } from 'react-router';
import Header from '../../components/header';
import { Content } from './style';

class Index extends React.PureComponent {
  render() {
    const {children} = this.props;
    return (
      <div>
        <Header />
        <Content>{children}</Content>
      </div>
    );
  }
}
export default withRouter(Index);
