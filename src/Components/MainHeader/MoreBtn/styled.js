import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`

`

export const UploadBtn = styled(Link)`
  width: 65px;
  height: inherit;
  text-align: center;
  text-decoration: none;
  background: inherit;
  color: #ccc;
  line-height: 42px;
  :active {
    background: #111;
    color: white;
  };
`

export const MoreBtn = styled.div`
  width: 46px;
  height: inherit;
`