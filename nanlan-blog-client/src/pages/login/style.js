/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import bgUrl from '../../static/images/bg.jpg';

export const LoginWrapper = styled.div`
  background: url(${bgUrl});
  background-size: cover;
  height: 100vh;
`;
export const LoginHeader = styled.div`
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
export const LoginContainer = styled.div`
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

// import styled from 'styled-components';

// export const LoginWrapper = styled.div`
//   text-align: center;
// `;

// export const Box = styled.div`
//   width: 400px;
//   margin: 60px auto 0;
//   padding: 50px 50px 30px;
//   background-color: #fff;
//   border-radius: 4px;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
//   vertical-align: middle;
//   display: inline-block;
// `;

// export const Title = styled.div`
//   margin: 0 auto 50px;
//   padding: 10px;
//   font-weight: 400;
//   color: #969696;
// `;

// export const Container = styled.div``;

// export const Input = styled.input`
//   width: 100%;
//   height: 50px;
//   margin-bottom: 0;
//   padding: 4px 12px;
//   border: 1px solid #c8c8c8;
//   border-radius: 0 0 4px 4px;
//   background-color: hsla(0, 0%, 71%, 0.1);
//   vertical-align: middle;
// `;

// export const Button = styled.div`
//   margin-top: 20px;
//   width: 100%;
//   padding: 9px 18px;
//   font-size: 18px;
//   border: none;
//   border-radius: 25px;
//   color: #fff;
//   background: #42c02e;
//   cursor: pointer;
//   outline: none;
//   display: block;
//   clear: both;
// `;
