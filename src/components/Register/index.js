import React, { useContext } from 'react';

import useForm from '../../hooks/useForm';
import signFormHelper from '../../helpers/signFormHelper';
import { Context as AuthContext } from '../../context/authContext';
import AuthForm from '../AuthForm';

const Register = () => {
    const { signup } = useContext(AuthContext);
    const { stateSchema, validationStateSchema } = signFormHelper();

    const onSubmitForm = async (state) => {
        await signup({username: state.username.value, password: state.password.value});
    };

    const { state, handleOnChange, handleOnSubmit } = useForm(stateSchema, validationStateSchema, onSubmitForm);

    return (
        <AuthForm
            username={state.username}
            password={state.password}
            onPress={handleOnChange}
            onSubmit={handleOnSubmit}
            usernameValid={state.username.touched && !Boolean(state.username.error)}
            usernameInvalid={state.username.touched && Boolean(state.username.error)}
            passwordValid={state.password.touched && !Boolean(state.password.error)}
            passwordInvalid={state.password.touched && Boolean(state.password.error)}
            submitButtonText="Sigh up"
        />
    );
};

export default Register;