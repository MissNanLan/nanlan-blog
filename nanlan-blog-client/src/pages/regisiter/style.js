/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import bgUrl from '../../static/images/bg.jpg';

export const RegisterWrapper = styled.div`
  background: url(${bgUrl});
  background-size: cover;
  height: 100vh;
`;
export const RegisterHeader = styled.div`
    margin: 0 auto;
    color: #fff;
    text-align: center;
    padding-top: 60px;
    padding-bottom: 10px;
    .title{
        font-size: 20px;
        font-weight: bold;
    }
    .subTitle{
        font-size: 16px
    }
`;

export const RegisterContainer = styled.div`
  background: #fff;
  position: absolute;
  z-index: 2;
  width: 444px;
  left: 50%;
  top: 50%;
  border-radius: 6px;
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.2);
  transform: translate3d(-50%, -50%, 0);
  .header{
    width: 320px;
    margin: 0 auto;
    display: flex;
    margin-top: 20px;
    justify-content : space-between;
    .title{
      font-size: 16px;
      font-weight: bold
    }
  }
  .box{
    width: 320px;
    margin: 0 auto;
  }
`;
