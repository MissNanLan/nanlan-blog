/* eslint-disable */
import styled from "styled-components";

export const ArchivesTitle = styled.span`
  font-weight: bold;
  padding-left: 6px;
  font-size: 16px;
`;

export const ArchivesItem = styled.div`
  padding: 0.15rem 1rem;
  cursor: pointer;
  transition: all 0.5s;
  line-height: 2;
  .date {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
    }
  }
  &:hover {
    background-color: #86b7b2;
    color: #fff;
    transform: scale(1.1);
  }
`;

export const ArchivesBottom = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 0.5rem 0;
  cursor: pointer;
  &:hover {
    background-color: #86b7b2;
    color: #fff;
  }
`;
