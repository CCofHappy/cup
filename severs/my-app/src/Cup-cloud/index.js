/**
 * Created by Administrator on 2016/11/17.
 */
import React from 'react';
import {Table,Button,Modal,Input,Radio,Row,Col,message}from 'antd';
import 'antd/dist/antd.css';
import FileList from './file-list';
import {getFileLisr} from './api';
import './index.css';
import { Router, Route, hashHistory,IndexRoute,Redirect,Link,IndexLink} from 'react-router';
import Nav from './nav';
import Menu from './menu';

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
            actNeme:'',
            nameValue:'',
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
                    onActive={(active)=>this.setState({active:active,nameValue:active})}
                    active={this.state.active}
                    actName={this.state.actNeme}
                    reName={(reName)=>this.setState({nameValue:reName})}
                    nameValue={this.state.nameValue}
                />
                <Menu
                    display={this.state.menu.display}
                    active={this.state.active}
                    onRename={(active)=>this.setState({actNeme:active,menu:{
                        display:false
                    }})}
                    x={this.state.menu.x}
                    y={this.state.menu.y}
                />
            </div>
        )
    },
    rightMouse:function (e) {
        if(e.button == 2){
            this.setState({
                menu:{
                    x:e.clientX ,
                    y:e.clientY ,
                    display:true
                }
            })
        }else {
            this.setState({
                actNeme:'',
                menu:{
                    display:false
                }

            })
        }
    },
    getFile:function (e) {
        var that = this;
        that.setState({
            load:true
        });
        getFileLisr(e,function (res) {
            // console.log(res);
            that.setState({
                file:res.file,
                path:res.path.split('/'),
                load:false
            })
        },function (err) {
            // console.log('err',err)
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
