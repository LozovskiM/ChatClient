import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';
import { Provider as AuthProvider } from './context/authContext';

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);