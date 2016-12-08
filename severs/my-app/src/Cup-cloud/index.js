/**
 * Created by Administrator on 2016/11/17.
 */
import React from 'react';
import {Table,Button,Modal,Input,Radio,Row,Col,message}from 'antd';
import 'antd/dist/antd.css';
import FileList from './file-list';
import {getFileList,rename,newFolder,remove} from './api';
import './index.css';
import { Router, Route, hashHistory,IndexRoute,Redirect,Link,IndexLink} from 'react-router';
import Nav from './nav';
import Menu from './menu';
import Action from './action';

var R = React.createClass({
    render:function(){
        return(
            <Router history={hashHistory}>
                <Route path='*' component={Cloud}/>
            </Router>
        )
    }
});

var Cloud = React.createClass({
    getInitialState:function () {
        return{
            file:[],
            path:[],
            load:false,
            menu:{
                x:0,
                y:0,
                display:false
            },
            active:'',
            actName:'',
            nameValue:'',
            actionType:'',
            newValue:'',
            showAction:false
        }
    },
    render:function () {
        return(
            <div className="cloud-container"
                 onContextMenu={(e)=>e.preventDefault()}
                 onMouseDown={this.rightMouse}
            >
                <h3 className="cloud-title" >杯具CLOUD</h3>
                <Nav path={this.state.path}/>
                <FileList
                    file={this.state.file}
                    loading={this.state.load}
                    path={this.state.path}
                    onActive={(e)=>this.setState({active:e})}
                    active={this.state.active}
                    actName={this.state.actName}
                    reName={(reName)=>this.setState({nameValue:reName})}
                    nameValue={this.state.nameValue}
                />
                <Menu
                    display={this.state.menu.display}
                    active={this.state.active}
                    x={this.state.menu.x}
                    y={this.state.menu.y}
                    onRename={(e)=>this.setState({
                        actName:e,
                        nameValue:e,
                        menu:{display:false}
                    })}
                    onMenu={this.onMenu}
                />
                <Action
                    visible={this.state.actionType}
                    type={this.state.actionType}
                    active={this.state.active}
                    newValue={this.state.newValue}
                    showAction={this.state.showAction}
                    onCancel={(e)=>this.setState({showAction:false,newValue:''})}
                    onChange={(value)=>this.setState({newValue:value})}
                    onNewFolder={this.handleNewFolder}
                    onRemoveFolder={this.handleRemoveFolder}
                    file={this.state.file}
                />
            </div>
        )
    },
    onMenu(e){
        this.setState({
            showAction:true,
            menu:{display:false},
            actionType:e
        });
        if (e =='new'){
            this.setState({
                newValue:'新建文件夹'
            })
        }
    },
    handleRemoveFolder(){
        var that = this;
        var path = this.state.path.join('/') +'/'+ this.state.active;
        var query = {
            name:this.state.active,
            path:path
        };
        remove(query,function (res) {
            that.setState({
                showAction:false
            });
            message.success('成功删除'+name+'!');
        },function (err) {
        })
    },
    handleNewFolder(name){
        var that = this;
        var path = this.state.path.join('/');
        newFolder({
            name:name,
            path:path
        },function (res) {
            var file = that.state.file;
            file.push(res);
            that.setState({
                file:file,
                showAction:false
            });
            message.success('成功新建：'+name+'!');
        },function (err) {
        });
    },
    handleRename(name){
        if (name==this.state.actName){
            this.setState({
            actName:'',
            nameValue:''
            })
        }else{
            var ok = true,file =this.state.file;
            for (var i=0 ;i<file.length;i++){
                if (file[i].name == name){
                    ok = false;
                }
            }
            if(ok){
                var that = this;
                var path = this.state.path.join('/') +'/'+ this.state.actName;
                var query = {
                    name:name,
                    path:path
                };
                rename(query,function (res) {
                    var file = that.state.file;
                    var json = [];
                    file.map(function (obj) {
                        if (obj.name == that.state.actName){
                            json.push(res);
                        }else {
                            json.push(obj)
                        }
                    });
                    that.setState({
                        file:json,
                        actName:'',
                        nameValue:'',
                    });
                    message.success('成功重命名！');
                },function (err) {
                })
            }else {
                message.error('文件名字重复！');
            }
        }
    },
    rightMouse:function (e) {
        if(e.button == 2){
            if (this.state.actName){
                this.setState({
                    actName:'',
                    nameValue:''
                })
            }
            this.setState({
                menu:{
                    x:e.clientX ,
                    y:e.clientY ,
                    display:true
                },
                active:''
            })
        }else {
            this.setState({
                active:'',
                menu:{
                    display:false
                }
            });
            if (this.state.actName){
                this.handleRename(this.state.nameValue);
            }

        }
    },
    getFile:function (e) {
        var that = this;
        that.setState({
            load:true
        });
        getFileList(e,function (res) {
            that.setState({
                file:res.file,
                path:res.path.split('/'),
                load:false
            })
        },function (err) {
        });
    },
    componentDidMount:function () {
        const {params} = this.props;
        const {splat} = params;
        this.getFile(splat);
    },
    componentWillReceiveProps(nextProps){
        const {params} = nextProps;
        const {splat} = params;
        this.getFile(splat);
    }
});

export default R;
