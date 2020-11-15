import styled from 'styled-components';
import { media } from '@/styles';
import { OperationItem } from '@/components/operation/style';

export const DetailWrapper = styled.div`
  ${media.maxWidth900`flex-direction: column;`}
  display: flex;
  justify-content: center;
  flex-direction: row
  background-color: #f5f5f5;
  max-width: 1200px
  margin: 0 auto;
  padding: 1.5rem 15px
`;

export const DetailLeft = styled.div`
  ${media.maxWidth900`width: 100%;`}
  background-color: #fff;
  width: 70%;
  text-align: center;
  padding: 1rem;
  ${OperationItem}{
    justify-content: center;
  }
  .star{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const Header = styled.div`
  color: #333;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: .3rem;
  ${media.maxWidth768`font-size: 1rem;`}
`;

export const Content = styled.div`
  text-align: left;
  font-size: .7rem;
  color: #404040;
  line-height: 1.8;
  margin-top: 1rem;
`;

export const Tags = styled.div`
   margin-top: 1rem;
   text-align: left;
`;

export const DetailRight = styled.div`
  ${media.maxWidth900`width: 100%; margin-left: 0; margin-top:1.5rem`}
  width: 30%;
  margin-left: 1.5rem;
`;

export const DetailBottom = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);
  z-index: 100;
  padding: .7rem 0;
  display: flex;
`;
