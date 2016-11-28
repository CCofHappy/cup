/**
 * Created by Administrator on 2016/11/28.
 */
import React from 'react';
import './index.css'

var menu = React.createClass({
    render:function(){
        return(
            <ul className="right-menu"
                onClick={this.onRightClick}
                style={{
                    display: this.props.display ? 'block' : 'none',
                    left:this.props.x+'px',
                    top:this.props.y+'px'
                }}
            >
                <li className="allow">新建文件夹</li>
                <li className="allow">重命名</li>
                <li className="allow">复制</li>
                <li className="allow">黏贴</li>
                <li className="allow">删除</li>
            </ul>
        )
    },
    onRightClick:function () {

    }
});

export default menu;
