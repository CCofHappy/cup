/**
 * Created by Administrator on 2016/11/9.
 */
import React from 'react';
import {Button,Col,Row,Table,Modal,Form,Input,Radio,message} from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
import  request from 'superagent';
import 'antd/dist/antd.css';

var header = [
    {title:'id',dataIndex:'id'},
    {title:'name',dataIndex:'name'},
    {title:'age',dataIndex:'age'},
    {title:'sex',dataIndex:'sex'},
    {
        title:'single',
        dataIndex:'single',
        // render:function(single,obj){
        //     return(
        //         <div>{single ? '单身狗':'恩爱狗'}</div>
        //     )
        // },
        render:(single)=>(<div>{single ? '单身狗':'恩爱狗'}</div>)
    }
];

var api='http://101.200.129.112:9527/react1/student/';

var ReactTest = React.createClass({
    getInitialState:function () {
        return{
            loading:true,
            items:[],
            modal:false,

            name:'',
            age:'',
            sex:'',
            single:null,

            selectedRowKeys:[],

        }
    },
    render:function () {
        const { loading , selectedRowKeys } = this.state;
        const  rowSelection={
            selectedRowKeys:selectedRowKeys,
            onChange:this.onSelectChange,
        };
        var del = selectedRowKeys.length ==1;
        return(
            <div className="table-box">
                <br/>
                <h3>动脑学院学生信息系统</h3>
                <div className="table-content">
                    <br/>
                    <Button icon="plus" type="primary" onClick={this.handleAdd}>增加</Button>&nbsp;
                    <Button icon="edit" type="ghost">编辑</Button>&nbsp;
                    <Button icon="delete" onClick={this.handleDelete} disabled={!del}>删除</Button>&nbsp;
                    <br/><br/>
                    <Table
                        loading={this.state.loading}
                        dataSource={this.state.items}
                        columns={header}
                        rowSelection={rowSelection}
                    />
                </div>
                <Modal
                    visible={this.state.modal}
                    onCancel={(e)=>this.setState({modal:false})}
                    onOk={this.handleSave}
                    title='增加信息'
                >
                    <Form>
                        <FormItem
                            label='姓名'
                            labelCol={{span:3}}
                            wrapperCol={{span:19}}
                        >
                            <Input value={this.state.name} onChange={(e)=>this.handleChange(e.target.value,'name')}/>
                        </FormItem>
                        <FormItem
                            label='年龄'
                            labelCol={{span:3}}
                            wrapperCol={{span:19}}
                        >
                            <Input value={this.state.age} onChange={(e)=>this.handleChange(e.target.value,'age')}/>
                        </FormItem>
                        <Row>
                            <Col span={12}>
                                <FormItem
                                    label='性别'
                                    labelCol={{span:6}}
                                    wrapperCol={{span:12}}
                                >
                                    <RadioGroup value={this.state.sex} onChange={(e)=>this.handleChange(e.target.value,'sex')}>
                                        <RadioButton key="boy" value={'boy'}>男</RadioButton>
                                        <RadioButton key="girl" value={'girl'}>女</RadioButton>
                                    </RadioGroup>
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    label='单身'
                                    labelCol={{span:6}}
                                    wrapperCol={{span:16}}
                                >
                                    <RadioGroup value={this.state.single} onChange={(e)=>this.handleChange(e.target.value,'single')}>
                                        <RadioButton key="single" value={true}>单身狗</RadioButton>
                                        <RadioButton key="no_single" value={false}>恩爱狗</RadioButton>
                                    </RadioGroup>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
            </div>
        )
    },
    onSelectChange(selectedRowKeys){
        console.log(selectedRowKeys);
        this.setState({selectedRowKeys:selectedRowKeys});
    },
    handleDelete(){
        var that = this;
        Modal.confirm({
            title:'删除信息',
            content:'你确定删除这条信息吗？该操作不可逆，请小心使用',
            onOk:function () {
                message.success('成功删除一条信息');
                var id = that.state.selectedRowKeys;
                var deleteRequest = api + id;
                request
                    .delete(deleteRequest)
                    .end(function (err,res) {
                        console.log(res.body);
                    });
            }
        })
    },
    handleSave(){
        var that = this;
        var data = {
            name:this.state.name,
            age:this.state.age,
            sex:this.state.sex,
            single:this.state.single,
        };
        request
            .post(api)
            .send(data)
            .end(function (err,res) {
                console.log(res.body);
                that.setState({
                    modal:false
                });
                message.success('提交成功！');
            });
    },
    handleChange(value,type){
        var obj ={};
        obj[type]=value;
        this.setState(obj);
    },
    componentDidMount(){
        var that = this;
        request
            .get(api)
            .end(function (err,res) {
                res.body = res.body.map(function (obj) {
                        obj.key = obj.id;
                        return obj;
                });
                that.setState({
                    items:res.body,
                    loading:false
                })
            })
    },
    handleAdd(){
        this.setState({
            modal:true
        })
    }

});

export default ReactTest;