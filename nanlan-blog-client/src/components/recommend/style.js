import styled from 'styled-components';

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
    color: #86b7b2;
  }
`;

export default RecommendContentItem;
