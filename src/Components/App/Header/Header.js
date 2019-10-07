import React, { Component } from 'react';
import * as S from './styled';


class Header extends Component {
    render () {
        return (
            <S.Header>
                <S.Logo></S.Logo>
                <S.SignField>
                    <S.SignInBtn>Sign in</S.SignInBtn>
                    <S.CreateAccBtn>Create account</S.CreateAccBtn>
                </S.SignField>
            </S.Header>
        )
    }
}
export default Header;