import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { IconfontStyle } from "../../static/font/iconfont";
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
} from "./style";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
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
      let _size = page * 10,
        _length = newList.length;
      let min = Math.min(_size, _length);
      for (let i = (page - 1) * 10; i < min; i++) {
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
              onClick={e => handlePageChange(page, totalPage, this.spinIcon, e)}
            >
              <span
                ref={icon => {
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
    } else {
      return null;
    }
  };

  getNavList = () => {};

  render() {
    const { focused, handleInputBlur, handleInputFocus, list } = this.props;
    const  account = (JSON.parse(localStorage.getItem("userInfo"))|{}).account 
    const navList = [
      {
        navName: "首页",
        path: "home"
      },
      {
        navName: "笔记",
        path: "note"
      },
      {
        navName: "随笔",
        path: "essay"
      },
      {
        navName: "摄影",
        path: "photography"
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
            {navList.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#ec6149"
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
                    className={focused ? "focused" : ""}
                    onFocus={() => {
                      handleInputFocus(list);
                    }}
                    onBlur={handleInputBlur}
                  ></SerachBox>
                </CSSTransition>
                <span className={focused ? "focused" : ""}></span>
                <span className="sousuo iconfont">&#xe62b;</span>
                {this.getListArea()}
              </SearchWrapper>
            </Search>
          </NavBar>
          <Addition>
            { account ? (
              <AdditionItem className="loginBtn">
                {account}
              </AdditionItem>
            ) : (
              <NavLink to="/login">
                <AdditionItem className="loginBtn">登录</AdditionItem>
              </NavLink>
            )}
            <AdditionItem>写文章</AdditionItem>
            <AdditionItem>注册</AdditionItem>
          </Addition>
        </HeaderBox>
      </HeaderWrapper>
    );
  }

  componentDidMount(){

  }
}


const mapStateToProps = state => {
  return {
    focused: state.header.get("focused"),
    list: state.header.get("list"),
    page: state.header.get("page"),
    totalPage: state.header.get("totalPage"),
    mouseIn: state.header.get("mouseIn"),
    loginStatus: state.login.get("loginStatus"),
    account: state.login.get("account")
  };
};

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
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
        spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      }
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else {
        dispatch(actionCreators.pageChange(1));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
