import styled from 'styled-components';

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
`

export const Title = styled.span`
  color: white;
  font-size: 30px;
  font-weight: 500;
`

export const Description = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 400;
`

export const ButtonContainer = styled.div`

`
export const SignUpBtn = styled.button`
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  background: #f50;
  color: white;
  cursor: pointer;
  outline: none;
`