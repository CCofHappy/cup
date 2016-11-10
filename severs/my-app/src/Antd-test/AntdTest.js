/**
 * Created by Administrator on 2016/11/9.
 */
import React from 'react';
import {Button,Col,Row,Table} from 'antd';
import 'antd/dist/antd.css'

var header = [
    {title:'name',dataIndex:'name'},
    {title:'age',dataIndex:'age'},
    {title:'sex',dataIndex:'sex'}
];

var data = [
    {name:'cup',age:"26",sex:"man"},
    {name:'star',age:"32",sex:"man"},
    {name:'YangYang',age:"24",sex:"woman"},
    {name:'cup',age:"26",sex:"man"},
    {name:'star',age:"32",sex:"man"},
    {name:'YangYang',age:"24",sex:"woman"},
    {name:'cup',age:"26",sex:"man"},
    {name:'star',age:"32",sex:"man"},
    {name:'YangYang',age:"24",sex:"woman"},
    {name:'cup',age:"26",sex:"man"},
    {name:'star',age:"32",sex:"man"},
    {name:'YangYang',age:"24",sex:"woman"}
];

var ReactTest = React.createClass({
    getInitialState:function () {
        return{
            loading:false
        }
    },
    render:function () {
        return(
            <div>
                <br/>
                <Row>
                    <Col>
                        <Table dataSource={data} columns={header}/>
                    </Col>
                </Row>
                <br/><br/>
                <Row span={4}>
                    <Button type="primary">hello xixi!</Button>
                </Row>
                <br/>
                <Col span={4}>
                    <Button
                        type="ghost"
                        icon={this.state.loading?null:"loading"}
                        onClick={this.ajax}
                    >hello cup!</Button>
                </Col>
                <br/>
            </div>
        )
    },
    ajax:function () {
        this.setState({
            loading:!this.state.loading
        })
    }

});

export default ReactTest;