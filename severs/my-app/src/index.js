/**
 * Created by Administrator on 2016/11/12.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import AntdTest from './Antd-test/AntdTest';
import AntdStudy from './Antd-study/AntdStudy';
import TableCard from './Antd-study/TableCard';
import Todo from './Todo/index';
import RouterStudy from './Router-study';
import './index.css';


ReactDOM.render(
    <div>
        {/*<App/>*/}
        {/*<Todo/>*/}
        {/*<AntdTest/>*/}
        {/*<br/>*/}
        {/*<AntdStudy/>*/}
        {/*<br/>*/}
        {/*<TableCard/>*/}
        <RouterStudy/>
    </div>,
    document.getElementById('root')
);
