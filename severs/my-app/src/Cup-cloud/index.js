/**
 * Created by Administrator on 2016/11/17.
 */
import React from 'react';
import {Table,Button,Modal,Input,Radio,Row,Col,message}from 'antd';
import 'antd/dist/antd.css';
import FileList from './file-list';
import Loading from './loading'
import {getFileLisr} from './api';
import './index.css'

var Cloud = React.createClass({
    getInitialState:function () {
        return{
            file:[],
            path:'',
            loading:true
        }
    },
    render:function () {
        return(
            <div>
                <h3 className="cloud-title">杯具CLOUD</h3>
                <FileList
                    file = {this.state.file}
                    path= {this.state.path}
                    onEnter={this.getFile}
                    loading={this.state.loading}
                />
            </div>
        )

    },
    componentDidMount:function () {
        this.getFile('/')
    },
    getFile:function (e) {
        var that = this;
        getFileLisr(e,function (res) {
            console.log(res);
            that.setState({
                file:res.file,
                path:res.path,
                loading:false
            })
        },function (err) {
            console.log('err',err)
        });
    }
});


export default Cloud;
