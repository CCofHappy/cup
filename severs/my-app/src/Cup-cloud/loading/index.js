/**
 * Created by Administrator on 2016/11/21.
 */
import React from 'react';
import {Icon} from 'antd';
import './index.css'

var Loading = React.createClass({
    render() {
        return(
            <div className="loading">
                <Icon type="loading"/>
                <p>正在加载中...</p>
            </div>
        )
    }
});

export default Loading;