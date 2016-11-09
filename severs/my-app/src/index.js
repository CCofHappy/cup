import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import AntdTest from './Antd-test/AntdTest';
import AntdStudy from './Antd-study/AntdStudy';
import Todo from './Todo/index';
import './index.css';

ReactDOM.render(
    <div>
        <App />
        <Todo />
        {/*<AntdTest />*/}
        <AntdStudy/>
    </div>,
    document.getElementById('root')
);
