import React from 'react';
import { Redirect } from 'react-router';

import { getUserInfo } from '../../helpers/userHelper';

const ResolveAuth = () => {
    if (getUserInfo()) {
        return (
            <Redirect to="/home" />
        );
    } else {
        return <Redirect to="/login" />
    }
};

export default ResolveAuth;