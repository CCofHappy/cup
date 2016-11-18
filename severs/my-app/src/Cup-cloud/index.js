/**
 * Created by Administrator on 2016/11/17.
 */
import React from 'react';
import {Table,Button,Modal,Input,Radio,Row,Col,message}from 'antd';
import 'antd/dist/antd.css';
import FileList from './file-list';
import {getFileLisr} from './api'

var Cloud = React.createClass({
    getInitialState:function () {
        return{
            file:[],
            path:''
        }
    },
    render:function () {
        return(
            <div>
                <h3>cup-cloud</h3>
                <FileList
                    file = {this.state.file}
                    path= {this.state.path}
                />
            </div>
        )
    },
    componentDidMount:function () {
        var that = this;
        getFileLisr('/',function (res) {
            console.log(res);
            that.setState({
                file:res.file,
                path:res.path
            })
        },function (err) {

        });
    }
});


export default Cloud;
