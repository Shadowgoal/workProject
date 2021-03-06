import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  text-align: center;
  width: 550px;
  height: 200px;
  bottom: 65px;
  left: calc(50% - 275px);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
`;

export const Title = styled.span`
  color: ${({ theme }) => (theme.white)};
  font-size: 30px;
  font-weight: 500;
`;

export const Description = styled.span`
  color: ${({ theme }) => (theme.white)};
  font-size: 18px;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`

`;

export const SignUpBtn = styled(Link)`
  border: none;
  width: 200px;
  padding: 10px 0;
  text-decoration: none;
  border-radius: 8px;
  background: ${({ theme }) => (theme.orange)};
  color: ${({ theme }) => (theme.white)};
  cursor: pointer;
  outline: none;
  display: inline-block;
  font-size: 15px;
`;
