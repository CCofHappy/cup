/**
 * Created by Administrator on 2016/11/28.
 */
import React from 'react';
import './index.css'

var menu = React.createClass({
    render:function(){
        return(
            <ul className="right-menu"
                style={{
                    display: this.props.display ? 'block' : 'none',
                    left:this.props.x+'px',
                    top:this.props.y+'px'
                }}
                onMouseDown={this.stopMp}
            >
                <li className="allow">新建文件夹</li>
                <li className="allow"
                    onClick={this.onRename}
                >重命名</li>
                <li className="allow">复制</li>
                <li className="allow">黏贴</li>
                <li className="allow">删除</li>
            </ul>
        )
    },
    stopMp:function (e) {
        e.preventDefault();
        e.stopPropagation();
    },
    onRename:function () {
        const {active,onRename} = this.props;
        onRename(active);
    }
});

export default menu;
