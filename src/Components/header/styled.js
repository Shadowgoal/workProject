import styled from 'styled-components';

export const Header = styled.header`
    background-image: url(https://a-v2.sndcdn.com/assets/images/home/sc_landing_header_web_b-447230e.jpg);
    position: absolute;
    width: inherit;
    height: 381px;
    border-top: 4px solid #f50;
`

export const Logo = styled.div`
    background: url(https://a-v2.sndcdn.com/assets/images/header/cloud-e365a47.png) no-repeat 12px 11px;
    position: absolute;
    width: 60px;
    height: 60px;
    top: 20px;
    left: 2%;
`

export const SignField = styled.div`
    position: absolute;
    width: 200px;
    height: 60px;
    top: 30px;
    right: 2%;
`

export const SignInBtn = styled.button`
    background: 0 0;
    color: white;
    height: 30px;
    width: 68px;
    border: 1px solid white;
    border-radius: 15%;
    margin-right: 8px;
    cursor: pointer;
    :hover {
        border: 2px solid white;
    }
    outline: none;
`

export const CreateAccBtn = styled.button`
    height: 30px;
    width: 120px;
    background-color: #f50;
    border: none;
    border-radius: 15%;
    color: white;
    cursor: pointer;
    outline: none;
`