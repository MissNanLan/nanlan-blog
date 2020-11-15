/* eslint-disable */
import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Dropdown, Drawer } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  ReloadOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { actionCreators } from "./store";

import {
  HeaderWrapper,
  HeaderBox,
  Logo,
  NavTop,
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
  SearchInfoItem,
} from "./style";

class HeaderMobile extends React.Component {
  state = { visible: false };

  menu = () => {
    return (
      <Menu>
        <Menu.Item key="0">
          <span onClick={this.linkTo}>退出</span>
        </Menu.Item>
      </Menu>
    );
  };

  linkTo = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };

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
      handlePageChange,
    } = this.props;

    const newList = list.toJS();
    const pageList = [];

    if (newList.length > 0) {
      const _size = page * 10;
      const _length = newList.length;
      const min = Math.min(_size, _length);
      for (let i = (page - 1) * 10; i < min; i += 1) {
        pageList.push(
          <SearchInfoItem key={i}> {newList[i].name} </SearchInfoItem>
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
              onClick={(e) =>
                handlePageChange(page, totalPage, this.spinIcon, e)
              }
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="spin"
              >
                <ReloadOutlined />
              </span>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>

          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
    return null;
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { focused, handleInputBlur, handleInputFocus, list } = this.props;
    const { account } = JSON.parse(localStorage.getItem("userInfo")) || {};
    const navList = [
      {
        navName: "首页",
        path: "/home",
      },
      {
        navName: "笔记",
        path: "/note",
      },
      {
        navName: "随笔",
        path: "/essay",
      },
      {
        navName: "摄影",
        path: "/photography",
      },
    ];

    return (
      <HeaderWrapper>
        <HeaderBox>
          <NavLink to="/">
            <Logo />
          </NavLink>

          <Search>
            <SearchWrapper>
              <CSSTransition timeout={1000} in={focused} classNames="slide">
                <SerachBox
                  className={focused ? "focused" : ""}
                  onFocus={() => {
                    handleInputFocus(list);
                  }}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              <span className={focused ? "focused" : ""} />
              <SearchOutlined />
              {this.getListArea()}
            </SearchWrapper>
          </Search>

          <div className="menu" onClick={() => this.showDrawer()}>
            <MenuOutlined />
          </div>

          <Drawer
            title=""
            placement="right"
            closable={false}
            onClose={() => this.onClose()}
            visible={this.state.visible}
            key="right"
          >
            <NavTop className="top">
              <Logo />
              <span className="account">{account}</span>
            </NavTop>

            <NavBar>
              {navList.map((item) => {
                return (
                  <NavLink
                    to={item.path}
                    key={item.path}
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#86b7b2",
                    }}
                    className="navItem"
                  >
                    {item.navName}
                  </NavLink>
                );
              })}
            </NavBar>

            <Addition>
              {account && <AdditionItem to="/home">退出</AdditionItem>}
              <NavLink to="/regisiter">
                <AdditionItem>注册</AdditionItem>
              </NavLink>
            </Addition>
          </Drawer>
        </HeaderBox>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get("focused"),
    list: state.header.get("list"),
    page: state.header.get("page"),
    totalPage: state.header.get("totalPage"),
    mouseIn: state.header.get("mouseIn"),
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
        let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
        if (originAngle) {
          originAngle = parseInt(originAngle, 10);
        } else {
          originAngle = 0;
        }
        // eslint-disable-next-line no-param-reassign
        spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      }
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else {
        dispatch(actionCreators.pageChange(1));
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(HeaderMobile));
