/**
 * Created by Administrator on 2016/11/9.
 */
import React from 'react';
import Button from './Button';
import Input from './Input';
import Table from './Table';

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园2号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

var antTest = React.createClass({
    getInitialState:function () {
      return{
          value:'cup'
      }
    },
    render:function () {
        return(
        <div>
            <h3>ant-study</h3>
            <Button loading={true}/><br/>
            <Input
                value={this.state.value}
                onChange={(e)=>this.setState({value:e.target.value})}
                onPressEnter={this.enter}
            />
            <br/><br/>
            <Table border dataSource={dataSource} columns={columns}/>
        </div>
        )
    },
    enter:function (e) {
        alert(e.target.value)
    }
});
export default antTest;