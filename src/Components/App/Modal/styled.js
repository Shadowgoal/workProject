import styled from 'styled-components';

export const Container = styled.div`

`

export const ModalWindow = styled.div`
    background-color: white;
    position: absolute;
    padding-top: 60px;
    width: 40%;
    height: 50%;
    top: 20%;
    left: 30%;
    visibility: ${ModalWindow => ModalWindow.visible ? 'visible' : 'hidden'};
`

export const ModalWindowShadow = styled.div`
    background-color: aliceblue;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    height: 100%;
    visibility: ${ModalWindow => ModalWindow.visible ? 'visible' : 'hidden'};
`

export const InputField = styled.div`
    display: grid;
    width: 45%;
    margin: 0 auto;
    margin-top: 10px;
`

export const Label = styled.label`
    margin: 0 auto;
`

export const InputError = styled.span`
    color: red;
    font-size: smaller;
`

export const RegisterButton = styled.button`
    background-color: #f50;
    border: none;
    border-radius: 15%;
    width: 80px;
    height: 30px;
    position: absolute;
    bottom: 15%;
    right: 31%;
`

export const CloseButton = styled.button`
    background: slategrey;
    border: none;
    width: 80px;
    height: 30px;
    border-radius: 15%;
    position: absolute;
    right: 10%;
    bottom: 15%;
`


