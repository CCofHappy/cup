import React from 'react'

var TodoLi = React.createClass({
    getInitialState:function () {
        return{
            value:''
        }
    },
    render:function () {
        return(
            <li key={this.props.list.id}>
                {this.props.list.text}
                <button
                    className={ this.props.list.type == 'active' ? 'action' : ''}
                    onClick={this.changeActive}
                >Active</button>
                <button
                    className={ this.props.list.type == 'complete' ? 'action' : ''}
                    onClick={this.changeComplete}
                >Complete</button>
                <button onClick={this.props.delete}>删除</button><br/>
                <input value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleEdit}>修改</button>
                <button onClick={this.handleCancel}>取消</button>
                <br/><br/>
            </li>
        )
    },
    changeActive:function (e) {
        this.props.active(e) ;
    },
    changeComplete:function (e) {
        this.props.complete(e) ;
    },
    handleChange:function (e) {
        this.setState({
            value:e.target.value
        })
    },
    handleEdit:function () {
        var obj ={
            id:this.props.list.id,
            text:this.state.value
        }
        this.props.edit(obj) ;
        this.setState({
            value:''
        })
    },
    handleCancel:function () {
        this.setState({
            value:''
        })
    }
});

var TodoList = React.createClass({
    render:function () {
        var that = this;
        var nodes = this.props.items.map(function (e) {
            return(
                <TodoLi
                    list={e}
                    delete={that.delete.bind(that,e)}
                    edit={that.edit}
                    active={that.active}
                    complete={that.complete}
                />
            )
        });
        return(
            <ul>{nodes}</ul>
        )
    },
    delete:function (e) {
        this.props.onDelete(e);
    },
    edit:function (e) {
        this.props.onEdit(e);
    },
    active:function (e) {
        this.props.onActive(e);
    },
    complete:function (e) {
        this.props.onComplete(e);
    }

});

export default TodoList;