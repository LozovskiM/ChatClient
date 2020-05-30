import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';

import Login from './Login';

const App = () => {
    return (
        <div className="app-wrapper">
            <Login />
        </div>
    );
};

export default App;