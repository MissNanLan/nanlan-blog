/* eslint-disable */
import styled from "styled-components";
import { media } from "@/styles";

export const ArticleList = styled.div`
  .title {
    display: flex;
    align-items: center;
    ${media.maxWidth768`font-size: 1rem;`}
    font-size: 1.2rem;
    line-height: 1.4;
    color: #333;
    &:hover {
      color: #86b7b2;
    }
    .ant-tag{
      margin-left: .3rem;
    }
  }

  .abstract {
    margin: 0.6rem 0 0 0;
    line-height: 1.4;
    color: #999;
  }
`;

export const ArticleItem = styled.div`
  margin: 0 0 1.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0;
`;

export const ArticleContent = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  padding: 1rem 1rem 1.5rem;
  display: flex;
  flex-direction: row;
`;

export const ArticleLeft = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 145px;
  }
  width: 45%;
  height: 145px;
  .images {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
    object-fit: cover;
  }
`;

export const ArticleRight = styled.div`
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    padding: 1rem 1rem 1.5rem;
  }
`;

export const ArticleOperation = styled.div`
  padding: 0.8rem 2rem;
  border-top: 1px solid #f3f3f3;
  font-size: 95%;
  display: flex;
  color: #999;
  .more {
    margin-left: auto;
    .arrow {
      font-size: 0.8rem;
    }
    &:hover {
      color: #86b7b2;
    }
  }
`;

export const ReadMore = styled.div`
  border-radius: 2rem;
  background-color: ${(props) =>
    props.currentPage > props.totalPage ? "#a5a5a5" : "#86b7b2"};
  margin: 3rem auto 6rem;
  padding: 1rem 1.5re;
  text-align: center;
  font-size: 1rem;
  color: #fff;
`;

export const NotAnyMore = styled.div`
  text-align: center;
  padding: 1rem 0;
  font-size: 1rem;
`;

export const PaginationContent = styled.div`
  margin-bottom: 20px;
  text-align:center;
`