import styled from 'styled-components';
import bannerUrl from '../../static/images/banner1.jpeg';

export const HomeWrapper = styled.div`
  
`;

export const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding-top: 30px;
`;

export const HomeLeft = styled.div`
  flex-basis: 50%;
`;

export const HomeRight = styled.div`
  flex-basis: 30%;
  margin-left: 30px;
`;

export const BannerWrapper = styled.div`
  height: 420px;
  width: 100%;
`;

export const BannerItem = styled.div`
  background: url(${bannerUrl});
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const BackTop = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  transition: 0.1s ease-in;
  padding: 14px 16px;
  .arrow {
    display: inline-block;
    transform: rotate(-90deg);
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;
