import styled from 'styled-components';
import { media } from '@/styles';
import bannerUrl from '../../static/images/banner1.jpeg';

export const HomeWrapper = styled.div`
  background-color: #f5f5f5;
`;

export const HomeBox = styled.div`
  ${media.maxWidth900`flex-direction: column;`}
  display: flex;
  justify-content: center;
  flex-direction: row
  background-color: #f5f5f5;
  max-width: 1200px
  margin: 0 auto;
  padding: 1.5rem 15px
`;

export const HomeLeft = styled.div`
  ${media.maxWidth900`width: 100%;`}
  width: 70%;
  margin-bottom: 84px;
`;

export const HomeRight = styled.div`
  ${media.maxWidth900`width: 100%;  margin-left: 0`}
  width: 30%;
  margin-left: 30px;
`;

export const BannerWrapper = styled.div`
  height: 420px;
  width: 100%;
`;

export const BannerItem = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bannerUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const BackTop = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  transition: 0.1s ease-in;
  padding: 0.8rem 1.2rem;

  .arrow {
    display: inline-block;
    transform: rotate(-90deg);
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;
