import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';
import { Provider as AuthProvider } from './context/authContext';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3020');

socket.on('send-chat-message', message => {
    const element = document.createElement('div');
    element.innerText = message;

    const messageArea = document.getElementById('message-area');
    if (!messageArea) {
        return;
    }

    messageArea.appendChild(element);
});

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);