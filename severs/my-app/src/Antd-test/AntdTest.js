/**
 * Created by Administrator on 2016/11/9.
 */
import React from 'react';
import {Button,Col,Row} from 'antd';
import 'antd/dist/antd.css'

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
                <Button>hello world!</Button>
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