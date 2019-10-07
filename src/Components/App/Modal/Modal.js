import React, { Component } from 'react';
import * as S from './styled';
import { connect } from 'react-redux';
import { onCloseModal } from './../../../redux/action'
import { Form, Field } from 'react-final-form';





class Modal extends Component {
    state = {

    };
    
     onRegister = () => {
        const addUser = this.props.values
        this.setState({addUser})
        console.log(this.props.meta)
    }
    
    render () {
        return (
            <S.Container>
                <S.ModalWindowShadow
                visible={this.props.isModalOpened}
                onClick={this.props.onCloseModal}
                >

                </S.ModalWindowShadow>
                <S.ModalWindow
                visible={this.props.isModalOpened}
                >
                    <Form
                    onSubmit={this.onRegister}
                    validate={values => {
                        const errors = {}
                        if (!values.username) {
                        errors.username = 'Required'
                        }
                        if (!values.email) {
                        errors.email = 'Email should contain @'
                        }
                        if (!values.password) {
                        errors.password = 'Required'
                        }
                        if (!values.confirm) {
                        errors.confirm = 'Required'
                        } else if (values.confirm !== values.password) {
                        errors.confirm = 'Must match'
                        }
                        return errors
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ input, meta }) => (
                            <S.InputField>
                                <S.Label>Username</S.Label>
                                <input {...input} type="text" placeholder="Username" />
                                {meta.error && meta.touched && <S.InputError>{meta.error}</S.InputError>}
                            </S.InputField>
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                            <S.InputField>
                                <S.Label>Email</S.Label>
                                <input {...input} type="text" placeholder="Email" />
                                {meta.error && meta.touched && <S.InputError>{meta.error}</S.InputError>}
                            </S.InputField>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                            <S.InputField>
                                <S.Label>Password</S.Label>
                                <input {...input} type="password" placeholder="Password" />
                                {meta.error && meta.touched && <S.InputError>{meta.error}</S.InputError>}
                            </S.InputField>
                            )}
                        </Field>
                        <Field name="confirm">
                            {({ input, meta }) => (
                            <S.InputField>
                                <S.Label>Confirm</S.Label>
                                <input {...input} type="password" placeholder="Confirm" />
                                {meta.error && meta.touched && <S.InputError>{meta.error}</S.InputError>}
                            </S.InputField>
                            )}
                        </Field>
                        <div className="buttons">
                            <S.RegisterButton type="submit" disabled={submitting}>
                            Register
                            </S.RegisterButton>
                            <S.CloseButton
                            type="button"
                            onClick={this.props.onCloseModal}
                            >
                            Close
                            </S.CloseButton>
                        </div>
                        </form>
                    )}
                    />
                    
                </S.ModalWindow>
            </S.Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    isModalOpened: state.isModalOpened,
    }
}

const mapDispatchToProps = {
    onCloseModal
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);