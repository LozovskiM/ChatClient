import React, { useState } from 'react';
import openSocket from 'socket.io-client';
import './styles.scss';

const Home = () => {
    const socket = openSocket('http://localhost:3020');
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('send-chat-message', message);
        setMessage('');
    };

    return (
        <div className="home-page-wrapper">
            <div className="send-message-container">
                <input
                    className="send-message-input"
                    placeholder="Write you message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="send-message-button"
                    onClick={sendMessage}
                >
                    Send message
                </button>
            </div>
            <div id="message-area" className="hello-to-chat-message" placeholder="Messages will appear here">
            </div>
        </div>
    );
};

export default Home;