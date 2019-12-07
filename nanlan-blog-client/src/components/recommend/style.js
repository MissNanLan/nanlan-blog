import styled from "styled-components";
export const RecommendWrapper = styled.div`
  margin: 0 0 15px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  padding: 20px 15px 10px 15px;
  width: 400px;
`;

export const RecommendTitle = styled.div`
  border-left: 4px solid #dd226d;
  padding-left: 6px;
`;

export const RecommendContent = styled.div`
  margin-top: 20px;
`;

export const RecommendContentItem = styled.div`
  border-bottom: 1px dashed #b4afaf;
  color: #666;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  .title {
    padding-left: 6px;
  }
  &:last-child {
    border: bone;
  }
  &:hover {
    color: #dd226d;
  }
`;
