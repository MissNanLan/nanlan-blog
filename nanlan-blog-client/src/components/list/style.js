import styled from 'styled-components';

export const ArticleList = styled.div`
  .title {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    color: #333;
    &:hover {
      color: #86b7b2;
    }
  }

  .abstract {
    margin: 6px 0 0 0;
    font-size: 12px;
    line-height: 22px;
    color: #999;
  }
`;

export const ArticleItem = styled.div`
  margin: 0 0 15px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0;
`;

export const ArticleContent = styled.div`
  padding: 20px 15px 10px 15px;
  display: flex;
`;

export const ArticleLeft = styled.div`
  .images {
    width: 240px;
    height: 145px;
  }
`;

export const ArticleRight = styled.div`
  margin-left: 10px;
`;

export const ArticleOperation = styled.div`
  padding: 8px 20px;
  border-top: 1px solid #f3f3f3;
  font-size: 12px;
  display: flex;
  color: #999;
  .more {
    margin-left: auto;
    .arrow {
      font-size: 8px;
    }
    &:hover {
      color: #86b7b2;
    }
  }
`;

export const ReadMore = styled.div`
  border-radius: 20px;
  background-color: ${(props) => (props.currentPage > props.totalPage ? '#a5a5a5' : '#86b7b2')};
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

export const NotAnyMore = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
`;
