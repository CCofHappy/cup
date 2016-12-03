/**
 * Created by Administrator on 2016/11/28.
 */
import React from 'react';
import './index.css'

var menu = React.createClass({
    render:function(){
        const {onNew,active,onRename,onMenu,}=this.props;
        return(
            <ul className="right-menu"
                style={{
                    display: this.props.display ? 'block' : 'none',
                    left:this.props.x+'px',
                    top:this.props.y+'px'
                }}
                onMouseDown={this.stopMp}
            >
                <li className="allow"
                    onClick={(e)=>onMenu("new")}
                >新建文件夹</li>
                <li className="allow"
                    onClick={(e)=>onRename(active)}
                    style={{display:active?'block':'none'}}
                >重命名</li>
                <li className="allow"
                    onClick={(e)=>onMenu("copy")}
                >复制</li>
                <li className="allow"
                    onClick={(e)=>onMenu("paste")}
                >黏贴</li>
                <li className="allow"
                    onClick={(e)=>onMenu("delete")}
                >删除</li>
            </ul>
        )
    },
    stopMp:function (e) {
        e.stopPropagation();
    }
});

export default menu;
