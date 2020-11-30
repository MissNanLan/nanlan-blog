import styled from 'styled-components';
import { media } from '@/styles';

export const NoteWrapper = styled.div`
  ${media.maxWidth900`flex-direction: column;`}
  display: flex;
  justify-content: center;
  flex-direction: row
  background-color: #f5f5f5;
  max-width: 1200px
  margin: 0 auto;
  padding: 1.5rem 15px
`;

export const NoteLeft = styled.div`
  ${media.maxWidth900`width: 100%;`}
  width: 70%;
  margin-bottom: 84px;
`;

export const NoteRight = styled.div`
  ${media.maxWidth900`width: 100%; margin-left: 0`}
  width: 30%;
  margin-left: 30px;
`;
