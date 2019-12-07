import styled from "styled-components";

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CommentTextArea = styled.textarea`
  width: 560px;
  height: 56px;
  padding-right: 80px;
  border-radius: 4px;
  background-color: #f2f2f2;
  overflow: auto;
  border: none;
  padding: 6px 8px;
`;

export const CommentBtn = styled.div`
  margin-left: 10px;
  align-self: flex-end;
  .button {
    color: #fff;
    background-color: #dd226d;
    border-color: #dd226d;
    padding: 4px 12px;
    margin-left: 10px;
    border-radius: 14px;
  }
  .cancel {
    color: #969696;
    background-color: #fff;
    border: 1px solid #999;
  }
`;
