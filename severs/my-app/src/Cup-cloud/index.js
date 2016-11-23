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

var R = React.createClass({
    render:function(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Cloud}/>
            </Router>
        )
    }
});

var Cloud = React.createClass({
    getInitialState:function () {
        return{
            file:[],
            path:'',
            load:false
        }
    },
    render:function () {
        return(
            <div>
                <h3 className="cloud-title">杯具CLOUD</h3>
                <FileList
                    file={this.state.file}
                    path={this.state.path}
                    onEnter={this.getFile}
                    loading={this.state.load}
                />
            </div>
        )
    },
    componentDidMount:function () {
        this.getFile('/')
    },
    getFile:function (e) {
        hashHistory.push(e);
        var that = this;
        that.setState({
            load:true
        });
        getFileLisr(e,function (res) {
            console.log(res);
            that.setState({
                file:res.file,
                path:res.path,
                load:false
            })
        },function (err) {
            console.log('err',err)
        });
    }
});

export default R;
