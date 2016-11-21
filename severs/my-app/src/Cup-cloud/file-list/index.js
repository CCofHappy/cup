/**
 * Created by Administrator on 2016/11/17.
 */
import React from 'react';
import {Icon} from 'antd';
import './index.css';

var FilesItem = React.createClass({
    render:function () {
        const {name,onEnter,path} = this.props;
        return(
           <li className="file-item" onClick={(e)=>onEnter(path)}>
               <Icon type='folder'/>
               <span>{name}</span>
           </li>
        )
    }
});

var FileList = React.createClass({
    render:function () {
        const {path,file,onEnter} = this.props;
        var nodes = file.map(function (obj) {
           return(
               <FilesItem
                   name={obj.name}
                   path={obj.path}
                   key={path+obj.name}
                   onEnter={onEnter}
               />
           )
        });
        return(
            <div>
                <ul className="file-list">
                    {nodes}
                </ul>
            </div>
        )
    }
});

export default FileList;