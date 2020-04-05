/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ComposeWrapper = styled.div`
  text-align: center;
  width: 900px;
  padding-top: 30px;
`;

export const ComposeHeader = styled.h3`
  margin: 30px 0;
`;

export const ComposeContent = styled.div`
  margin-bottom: 30px;

  .textarea-content {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s, height 0s
    .ant-input {
      border: none;
      resize: none;
      outline:none;
    } 
  }
  .textarea-inappend {
    display: block;
    width: auto;
    margin-bottom: 0 !important;
    box-sizing: border-box;
    text-align: right;
    padding-right: 10px;
    color: #9a9a9a;
  }
  .braft-content {
    border: 1px solid #d1d1d1;
    border-radius: 5px;
  }
  .;
`;
