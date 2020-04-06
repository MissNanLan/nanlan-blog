import styled from 'styled-components';
import logoPic from '../../static/images/logo.jpeg';

export const HeaderWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  background: #fff;
`;

export const HeaderBox = styled.div`
  height: 60px;
  padding: 4px 40px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-around;
`;

export const NavBar = styled.div`
  height: 100%;
  display: flex;
  flex-basis: 70%;
  justify-content: center;
  .navItem {
    height: 56px;
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background: url(${logoPic});
  background-size: cover;
`;

export const Addition = styled.div`
  flex-basis: 30%;
`;

export const Search = styled.div`
  flex-basis: 40%;
  margin-left: 30px;
`;

export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  .sousuo {
    position: absolute;
    right: 10px;
    top: 40%;
  }
`;

export const SerachBox = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  padding-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
`;

// enter是入场前，active是指入场后到入场结束的过程，exit是出场前
export const SearchInfo = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 160px;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  margin: 8px 6px;
`;

export const SearchInfoTitle = styled.div`
  overflow: hidden;
`;

export const SearchInfoText = styled.span`
  font-size: 14px;
  color: #969696;
  display: inline-block;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 14px;
  color: #969696;
  cursor: pointer;
  .spin {
    font-size: 12px;
    display: inline-block;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  margin-top: 10px;
`;

export const SearchInfoItem = styled.span`
  padding: 2px 4px;
  text-align: center;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  margin: 4px;
  display: inline-block;
  &:hover {
    color: #333;
    border: 1px solid #333;
  }
`;

export const AdditionItem = styled.div`
  padding: 0 20px;
  line-height: 38px;
  height: 38px;
  text-align: center;
  border-radius: 19px;
  border: 1px solid #86b7b2;
  color: #86b7b2;
  float: left;
  margin-left: 10px;
  &.loginBtn {
    border: none;
    color: #969696;
  }
`;
