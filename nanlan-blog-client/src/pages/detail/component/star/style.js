import styled from "styled-components";

export const StarWrapper = styled.div`
  cursor: pointer;
  &.active {
    .iconfont {
      background-color: #dd226d;
      color: #fff;
    }
    span {
      color: #dd226d;
    }
  }
`;

export const StarBtn = styled.div`
  width: 48px;
  text-align: center;
  .iconfont {
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    background-color: #fff;
    margin-bottom: 10px;
  }
`;