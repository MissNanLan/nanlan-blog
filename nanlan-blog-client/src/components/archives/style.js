/* eslint-disable */
import styled from "styled-components";

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
