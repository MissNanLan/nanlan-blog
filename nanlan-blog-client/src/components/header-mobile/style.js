import styled from 'styled-components';
import logoPic from '../../static/images/logo.jpeg';

export const HeaderWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  /* z-index: 1030; */
  background: #fff;
`;

export const HeaderBox = styled.div`
  padding: 10px .8rem
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 1rem;

  .account {
    font-size: 0.9rem;
    padding-left: .5rem
  }
`;

export const NavBar = styled.div`
  margin-top: 1rem;
  .navItem {
    display: block;
    text-align: center;
    padding: .3rem 1.5rem
    font-size: 0.8rem;
    color: #333;
    text-decoration: none;
    text-overflow: ellipsis;
    text-shadow: none;
    white-space: nowrap;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background-image: url(${logoPic});
  background-size: cover;
  border-radius: 2rem;
`;

export const Search = styled.div`
  margin-left: 0.5rem;
`;

export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  .anticon-search {
    position: absolute;
    right: 10%;
    transform: translateY(-50%);
    top: 50%;
    color: #4c4948;
  }
`;

export const SerachBox = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 6rem;
  height: 38px;
  padding: 0 1rem;
  padding-left: 1rem;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 1rem;
  background: #eee;

  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 10rem;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 10rem;
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
  padding: 0.5rem;
  width: 10rem;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  margin: 0.4rem 0.3rem;
`;

export const SearchInfoTitle = styled.div`
  overflow: hidden;
`;

export const SearchInfoText = styled.span`
  font-size: 0.7rem;
  color: #969696;
  display: inline-block;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 0.7rem;
  color: #969696;
  cursor: pointer;
  .spin {
    font-size: 12px;
    display: inline-block;
    margin-right: 0.1rem;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  margin-top: 0.5rem;
`;

export const SearchInfoItem = styled.span`
  padding: 0.1rem 0.2rem;
  text-align: center;
  font-size: 0.6rem;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  margin: 0.2rem;
  display: inline-block;
  &:hover {
    color: #333;
    border: 1px solid #333;
  }
`;

export const Addition = styled.div`
  display: flex;
  margin-top: 4rem;
`;

export const AdditionItem = styled.div`
  width: 5rem;
  line-height: 1.9rem;
  height: 1.9rem;
  text-align: center;
  border-radius: 1rem;
  border: 1px solid #86b7b2;
  color: #86b7b2;
  float: left;
  margin-left: 0.5rem;
  &.loginBtn {
    border: none;
    color: #969696;
  }
`;
