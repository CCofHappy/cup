/**
 * Created by Administrator on 2016/11/9.
 */
import React from 'react';
import {Button,Col,Row,Table} from 'antd';
import  request from 'superagent'
import 'antd/dist/antd.css'

var header = [
    {title:'id',dataIndex:'id'},
    {title:'name',dataIndex:'name'},
    {title:'age',dataIndex:'age'},
    {title:'sex',dataIndex:'sex'},
    {title:'single',dataIndex:'single'}
];

var data = [

];
const getAll='http://101.200.129.112:9527/react1/student/';

var ReactTest = React.createClass({
    getInitialState:function () {
        return{
            loading:false,
            items:[]
        }
    },
    render:function () {
        return(
            <div>
                <br/>
                <h3>动脑学院学生信息系统</h3>
                <Row>
                    <Col>
                        <Table dataSource={this.state.items} columns={header}/>
                    </Col>
                </Row>
                <br/><br/>
            </div>
        )
    },
    componentDidMount(){
        var that = this;
        request
            .get(getAll)
            .end(function (err,res) {
                res.body = res.body.map(function (obj) {
                        obj.key = obj.id;
                        return obj;
                });
                that.setState({
                    items:res.body
                })
            })
    }

});

export default ReactTest;