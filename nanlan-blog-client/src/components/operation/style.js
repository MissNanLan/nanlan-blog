import styled from 'styled-components';

export const OperationWrapper = styled.div``;
export const OperationItem = styled.div`
  display: flex;
  justify-content: center;
  span {
    vertical-align: middle;
    &.btn-group {
      padding-left: 10px;
      padding-right: 4px;
      .iconfont {
        font-size: 16px;
      }
      .pinglun {
        font-size: 10px;
      }
      .text {
        font-size: 12px;
        padding-left: 4px;
      }
      &:hover {
        color: #dd226d;
      }
    }
  }
`;
