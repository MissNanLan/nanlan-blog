/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
 NavLink,
  withRouter
} from 'react-router-dom';
import {
  Menu,
  Dropdown,
  Icon,
  Button
} from 'antd';
import { actionCreators } from './store';
import { IconfontStyle } from '../../static/font/iconfont';
import {
  HeaderWrapper,
  HeaderBox,
  Logo,
  NavBar,
  Addition,
  AdditionItem,
  Search,
  SearchWrapper,
  SerachBox,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoText,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';

class Header extends React.Component {
  menu = () => {
    return (
      <Menu>
        <Menu.Item key="0">
          <span onClick={this.linkTo}>
            退出
          </span>
        </Menu.Item>
      </Menu>
    );
  }

  linkTo = () => {
    localStorage.clear();
    this.props.history.push('/login');
  }

  // 搜索框的下拉列表
  getListArea = () => {
    const {
      focused,
      mouseIn,
      list,
      hadleMouseEnter,
      hanleMouseLeave,
      page,
      totalPage,
      handlePageChange
    } = this.props;

    const newList = list.toJS();
    const pageList = [];

    if (newList.length > 0) {
      const _size = page * 10;
      const _length = newList.length;
      const min = Math.min(_size, _length);
      for (let i = (page - 1) * 10; i < min; i += 1) {
        pageList.push(
          <SearchInfoItem key={i}>
            {' '}
            {newList[i].name}
            {' '}
          </SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={hadleMouseEnter}
          onMouseLeave={hanleMouseLeave}
        >
          <SearchInfoTitle>
            <SearchInfoText>热门搜索</SearchInfoText>
            <SearchInfoSwitch
              onClick={(e) => handlePageChange(page, totalPage, this.spinIcon, e)}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe62a;
              </span>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>

          <SearchInfoList>{pageList}</SearchInfoList>

          {/* <SearchInfoList>
            {list.map((item, index) => {
              return <SearchInfoItem key={index}>{item.name}</SearchInfoItem>;
            })}
          </SearchInfoList> */}
        </SearchInfo>
      );
    }
    return null;
  };

  handleClick = () => {
    const a = {};
    // 此处同样会报错
    console.log(a.name.name);
    // 抛出错误
    const err = new Error('抛出错误');
    console.log(err);
  }

  render() {
    const {
        focused, handleInputBlur, handleInputFocus, list
    } = this.props;
    const { account } = JSON.parse(localStorage.getItem('userInfo')) || {};
    const navList = [
      {
        navName: '首页',
        path: '/home'
      },
      {
        navName: '笔记',
        path: '/note'
      },
      {
        navName: '随笔',
        path: '/essay'
      },
      {
        navName: '摄影',
        path: '/photography'
      }
    ];

    return (
      <HeaderWrapper>
        <HeaderBox>
          <IconfontStyle />
          <NavBar>
            <NavLink to="/">
              <Logo />
            </NavLink>
            {navList.map((item) => {
              return (
                <NavLink
                  to={item.path}
                  key={item.path}
                  activeStyle={{
                    fontWeight: 'bold',
                    color: '#86b7b2'
                  }}
                  className="navItem"
                >
                  {item.navName}
                </NavLink>
              );
            })}
            <Search>
              <SearchWrapper>
                <CSSTransition timeout={1000} in={focused} classNames="slide">
                  <SerachBox
                    className={focused ? 'focused' : ''}
                    onFocus={() => {
                      handleInputFocus(list);
                    }}
                    onBlur={handleInputBlur}
                  />
                </CSSTransition>
                <span className={focused ? 'focused' : ''} />
                <span className="sousuo iconfont">&#xe62b;</span>
                {this.getListArea()}
              </SearchWrapper>
            </Search>
          </NavBar>
          <Addition>
            {account ? (
              <AdditionItem className="loginBtn">
                <Dropdown overlay={this.menu()} trigger={['hover']}>
                  <span className="ant-dropdown-link">
                    {account}
                    <Icon type="down" />
                  </span>
                </Dropdown>
              </AdditionItem>
            ) : (
              <NavLink to="/login">
                <AdditionItem className="loginBtn">登录</AdditionItem>
              </NavLink>
            )}
            <NavLink to="/compose">
              <AdditionItem>写文章</AdditionItem>
            </NavLink>
            <NavLink to="/regisiter">
              <AdditionItem>注册</AdditionItem>
            </NavLink>
          </Addition>
          <Button onClick={this.handleClick}>dddd</Button>
        </HeaderBox>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    list: state.header.get('list'),
    page: state.header.get('page'),
    totalPage: state.header.get('totalPage'),
    mouseIn: state.header.get('mouseIn')
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // eslint-disable-next-line no-unused-expressions
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    hadleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    hanleMouseLeave() {
      dispatch(actionCreators.moueLeave());
    },
    handlePageChange(page, totalPage, spin, e) {
      e.nativeEvent.stopImmediatePropagation();
      if (spin) {
        let originAngle = spin.style.transform.replace(/[^0-9]/gi, '');
        if (originAngle) {
          originAngle = parseInt(originAngle, 10);
        } else {
          originAngle = 0;
        }
        // eslint-disable-next-line no-param-reassign
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      }
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else {
        dispatch(actionCreators.pageChange(1));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Header));
