import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Todo from './Todo/index';
import './index.css';

ReactDOM.render(
    <div>
        <App />
        <Todo />
    </div>,
    document.getElementById('root')
);
