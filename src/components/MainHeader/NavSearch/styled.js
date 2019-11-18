import styled from 'styled-components';
import search from 'assets/HelpIcons/search.png';

export const Container = styled.div`
  height: inherit;
  width: 400px;
  background: inherit;
`;

export const SearchForm = styled.form`
  padding: 9px 10px 8px;
  position: relative;
`;

export const SearchInput = styled.input`
  color: #666;
  outline: 0;
  border: 0;
  padding: 5px 7px;
  background: ${({ theme }) => (theme.dark)};
  border-radius: 5px;
  width: -webkit-fill-available;
`;

export const SearchBtn = styled.button`
  border: 0;
  padding: 0;
  background: url(${search}) 0 0 no-repeat;
  outline: none;
  background-size: 15px;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 20px;
  top: 15px;
  z-index: 2;
  cursor: pointer;
`;
