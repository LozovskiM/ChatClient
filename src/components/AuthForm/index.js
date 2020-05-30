import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

import './styles.scss';

const AuthForm = (props) => {
    const submitButtonDisable = () => {
        return props.usernameInvalid || props.passwordInvalid;
    };

    console.log(props);
    return (
        <div className="auth-form-container">
            <Form onSubmit={props.onSubmit}>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Input your username here"
                        invalid={props.usernameInvalid}
                        valid={props.usernameValid}
                        onChange={props.onPress}
                        onBlur={props.onPress}
                        value={props.username.value}
                    />
                    <FormFeedback>{props.username.error}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        autoComplete="on"
                        placeholder="Input your password here"
                        invalid={props.passwordInvalid}
                        valid={props.passwordValid}
                        value={props.password.value}
                        onChange={props.onPress}
                        onBlur={props.onPress}
                    />
                    <FormFeedback>{props.password.error}</FormFeedback>
                </FormGroup>
                <div className="submit-button-container">
                    <Button
                        disabled={submitButtonDisable()}
                    >
                        {props.submitButtonText}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AuthForm;
