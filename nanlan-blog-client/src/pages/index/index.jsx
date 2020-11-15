/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router';
import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import { Content } from './style';

class Index extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMobile: false,
    };
    this.resizeWindow = this.resizeWindow.bind(this);
  }

  componentDidMount() {
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.resizeWindow);
  }

  resizeWindow = () => {
    if (document.documentElement.clientWidth > 900) {
      this.setState({
        isMobile: false,
      });
    } else {
      this.setState({
        isMobile: true,
      });
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        {this.state.isMobile ? <HeaderMobile /> : <Header />}
        <Content>{children}</Content>
      </div>
    );
  }
}
export default withRouter(Index);
