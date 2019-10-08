import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalWindow = styled.div`
  background-color: white;
  position: absolute;
  padding-top: 60px;
  width: 500px;
  height: 400px;
  top: 20%;
  left: calc(50% - 250px);
  box-shadow: 1px 3px 7px 4px grey;
  z-index: 2;
  visibility: ${ModalWindow => (ModalWindow.visible ? 'visible' : 'hidden')};
`;

export const ModalWindowShadow = styled.div`
  background-color: aliceblue;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  visibility: ${ModalWindow => (ModalWindow.visible ? 'visible' : 'hidden')};
`;

export const CloseModalX = styled.span`
    position: absolute;
    width: 30px;
    height: 30px;
    font-weight: 500;
    font-size: -webkit-xxx-large;
    right: 2%;
    cursor: pointer;
`
export const Link = styled.a`
  text-decoration: none;
`

export const InputField = styled.div`
  display: grid;
  width: 45%;
  height: 53px;
  margin: 0 auto;
  margin-top: 10px;
`;

export const Label = styled.label`
  margin: 0 auto;
`;

export const InputError = styled.span`
  color: red;
  font-size: x-small;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid lightslategrey;
    outline: none;
    height: 25px;
`

export const ButtonField = styled.div`
  position: absolute;
  right: 8%;
  bottom: 13%;
`;

export const CreateAcc = styled.span`
    color: dimgrey;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 27px;
    font-size: xx-large;
    font-weight: 500;
`

export const RegisterButton = styled.button`
  background-color: #f50;
  border: none;
  border-radius: 15%;
  width: 80px;
  height: 30px;
  cursor: pointer;
  margin-right: 15px;
  outline: none;
`;

export const CloseButton = styled.button`
  background: dimgrey;
  border: none;
  width: 80px;
  height: 30px;
  border-radius: 15%;
  right: 10%;
  cursor: pointer;
  outline: none;
`;


export const RegisterForm = styled.form`
:first-child {
    margin-top: 30px;
}
`
