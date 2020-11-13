import styled from 'styled-components';
import bannerUrl from '../../static/images/banner1.jpeg';

export const HomeWrapper = styled.div`
  background-color: #f5f5f5;
`;

export const HomeBox = styled.div`
@media screen and (max-width: 900px){
  flex-direction: column
}
  display: flex;
  justify-content: center;
  flex-direction: row
  background-color: #f5f5f5;
  padding-top: 30px;
  max-width: 1200px
  margin: 0 auto;
  padding: 2rem 15px
`;

export const HomeLeft = styled.div`
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  width: 70%;
`;

export const HomeRight = styled.div`
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  width: 30%;
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
