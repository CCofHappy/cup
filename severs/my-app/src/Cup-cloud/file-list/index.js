/**
 * Created by Administrator on 2016/11/17.
 */
import React from 'react';
import {Icon,Input} from 'antd';
import './index.css';
import Loading from '../loading';
import {hashHistory} from 'react-router';

const host = 'http://101.200.129.112:9527/static/';

function getIcon(ext,isFolder){
    if (isFolder){
        return 'folder'
    }
    switch (ext){
        case '.html':
        case '.css':
        case '.js':
            return 'code';
        case '.jpg':
        case '.png':
        case '.gif':
        case '.jpeg':
            return 'picture';
        case '.txt':
            return 'file-text';
        default:
            return 'file-unknown';
    }
}

var FilesItem = React.createClass({
    render:function () {
        const {name,ext,isFolder,actName,nameValue,reName,onActive} = this.props;
        const type = getIcon(ext,isFolder);
        return(
           <li
               className="file-item"
               onDoubleClick={this.handleClick}
               onContextMenu={(e)=>onActive(name)}

           >
               <Icon type={type}/>
               <span style={{display:actName==name?'none':'block'}}>{name}</span>
               <Input
                   style={{display:actName==name?'block':'none'}}
                   onDoubleClick={this.stopMp}
                   value={nameValue}
                   onChange={
                       (e)=>reName(e.target.value)
                   }
                   onMouseDown={this.stopMp}
               />
           </li>
        )
    },
    stopMp:function (e) {
        e.stopPropagation();
    },
    handleClick:function () {
        const {isFolder,path} = this.props;
        if (isFolder){
            hashHistory.push(path);
        }else {
            window.open(host+path);
        }
    },
    // mouseDown(){
    //     const {name,onActive} = this.props;
    //     onActive(name)
    // }
});

var FileList = React.createClass({
    render:function () {
        const {path,file,onEnter,loading,onActive,active,actName,reName,nameValue} = this.props;
        var nodes = file.map(function (obj) {
           return(
               <FilesItem
                   name={obj.name}
                   path={obj.path}
                   key={path+obj.name}
                   ext={obj.ext}
                   isFolder={obj.isFolder}
                   onEnter={onEnter}
                   onActive={onActive}
                   active={active}
                   actName={actName}
                   reName={reName}
                   nameValue={nameValue}
               />
           )
        });
        return(
            <div>
                <div style={{display:loading?'block':'none'}}>
                    <Loading/>
                </div>
                <ul className="file-list" style={{display:loading?'none':'block'}}>
                    {nodes}
                </ul>
            </div>
        )
    }
});

export default FileList;