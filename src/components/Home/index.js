import React from 'react';

import './styles.scss';

const Home = () => {
    return (
        <div className="home-page-wrapper">
            <div className="send-message-container">
                <input placeholder="Write you message here" className="send-message-input"/>
                <button className="send-message-button">Send message</button>
            </div>
            <div className="hello-to-chat-message">
                Hello to our chat =)
            </div>
        </div>
    );
};

export default Home;