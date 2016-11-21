/**
 * Created by Administrator on 2016/11/21.
 */
import React from 'react';
import Icon from 'antd';

var Loading = React.createClass({
    render:function () {
        return(
            <div>
                <Icon type="loading"/>
                <p>正在加载中...</p>
            </div>
        )
    }
});

export default Loading;