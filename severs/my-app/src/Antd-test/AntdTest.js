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
            showAdd:false,
            showChange:false,

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
                    <Button icon="edit" onClick={this.handleList} disabled={!del} type="ghost">编辑</Button>&nbsp;
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
                    visible={this.state.showAdd}
                    onCancel={(e)=>this.setState({showAdd:false})}
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

                <Modal
                    visible={this.state.showChange}
                    onCancel={(e)=>this.setState({showChange:false})}
                    title='编辑信息'
                    onOk={this.handleEdit}
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
        this.setState({selectedRowKeys:selectedRowKeys});
        var items = this.state.items;
        for(var i=0;i<items.length;i++){
            if (items[i].id == selectedRowKeys){
                this.setState({
                    name:items[i].name,
                    age:items[i].age,
                    sex:items[i].sex,
                    single:items[i].single
                })
            }
        }
    },
    handleEdit(){
        var that = this;
        var id = this.state.selectedRowKeys;
        var obj = {
            name:this.state.name,
            age:this.state.age,
            sex:this.state.sex,
            single:this.state.single,
        };
        var editRequest= api + id + '/';
        request
            .patch(editRequest)
            .send(obj)
            .end(function (err,res) {
                that.setState({
                    showChange:false
                });
                message.success('编辑成功！');
            });
    },
    handleDelete(){
        var that = this;
        Modal.confirm({
            title:'删除信息',
            content:'你确定删除这条信息吗？该操作不可逆，请小心使用',
            onOk:function () {
                var id = that.state.selectedRowKeys;
                var deleteRequest = api + id +"/";
                request
                    .delete(deleteRequest)
                    .end(function (err,res) {
                        var items = [];
                        var student = that.state.items;
                        for (var i=0;i<student.length;i++){
                            if(student[i].id != id){
                                items.push(student[i])
                            }
                        }
                        that.setState({
                            items:items
                        });
                        message.success('成功删除！');
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
                that.setState({
                    showAdd:false
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
            showAdd:true
        })
    },
    handleList(){
        this.setState({
            showChange:true
        })
    }

});

export default ReactTest;