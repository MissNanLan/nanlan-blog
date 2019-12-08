import styled from 'styled-components';

export const DetailSide = styled.div`
  position: fixed;
  top: 216px;
  left: 10px;
  .active {
    background: "green";
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding-top: 30px;
  min-height: calc(100vh - 144px);
  overflow: auto;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;

export const DetailLeft = styled.div`
  background-color: #fff;
  flex-basis: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  padding: 15px;
  text-align: center;
  span {
    color: #969696;
  }
`;
export const Header = styled.div`
  color: #333;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 6px;
`;

export const Content = styled.div`
  margin-top: 20px;
  text-align: left;
  font-size: 14px;
  color: #404040;
  line-height: 1.8;
`;

export const DetailRight = styled.div`
  flex-basis: 30%;
  margin-left: 30px;
`;

export const DetailBottom = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);
  z-index: 100;
  padding: 14px 0;
  display: flex;
`;
