import styled from 'styled-components';
import { media } from '@/styles';

export const ListWrapper = styled.div`
  ${media.maxWidth900`flex-direction: column;`}
  display: flex;
  justify-content: center;
  flex-direction: row
  background-color: #f5f5f5;
  max-width: 1200px
  margin: 0 auto;
  padding: 1.5rem 15px
`;

export const ListLeft = styled.div`
  margin-bottom: 84px;
  ${media.maxWidth900`width: 100%;margin-bottom:0`}
  width: 70%;
`;

export const ListRight = styled.div`
  ${media.maxWidth900`width: 100%;  margin-left: 0`}
  width: 30%;
  margin-left: 30px;
`;
