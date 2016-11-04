import React from 'react';
import TodoList from  './TodoList';

var idnum = 0;
function id() {
    return idnum++
};

var TodoMVC = React.createClass({
    getInitialState:function(){
        return{
            items:[
                {text:"aa",id:id(),type:'active'},
                {text:"bb",id:id(),type:'complete'},
                {text:"cc",id:id(),type:'active'}
            ],
            value:'',
            type:'all'
        }
    },

    render:function () {
        var items = this.state.items,
            type = this.state.type,
            json = [];
        items.map(function (obj) {
            if (obj.type == type || type == 'all'){
                json.push(obj)
            }
        });
        return(
            <div className="todo-mvc">
                <h3>tools</h3>
                <TodoList
                    items={json}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                    onActive={this.changeActive}
                    onComplete={this.changeComplete}
                />
                <p>
                    <button onClick={this.handleAll}>ALL</button>
                    <button onClick={this.handleActive}>ACTIVE</button>
                    <button onClick={this.handleComplete}>COMPLETE</button>
                </p>
                <p>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>提交</button>
                </p>
            </div>
        )
    },

    handleAll:function () {
        this.setState({
            type:'all'
        })
    },
    handleActive:function () {
        this.setState({
            type:'active'
        })
    },
    handleComplete:function () {
        this.setState({
            type:'complete'
        })
    },
    handleChange:function (e) {
        this.setState({
            value:e.target.value
        })
    },
    handleAdd:function () {
        var items = this.state.items,
            text = this.state.value;
        items.push({
            text:text,
            id:id(),
            type:'active'
        });
        this.setState({
            items:items,
            value:''
        })
    },
    handleDelete:function (e) {
        var items = this.state.items,
            json = [];
        for (var i = 0;i<items.length;i++ ){
            if (items[i].id != e.id){
                json.push(items[i])
            }
        }
        this.setState({
            items:json
        })
    },
    handleEdit:function (e) {
        var items = this.state.items;
        for (var i = 0;i<items.length;i++ ){
            if (items[i].id == e.id){
                items[i].text = e.text;
            }
        }
        this.setState({
            items:items
        })
    },
    changeActive:function (e) {
        var items = this.state.items;
        for (var i = 0;i<items.length;i++ ){
            if (items[i].id == e.id){
                items[i].type = 'active';
            }
        }
        this.setState({
            items:items
        })
    },
    changeComplete:function (e) {
        var items = this.state.items;
        for (var i = 0;i<items.length;i++ ){
            if (items[i].id == e.id){
                items[i].type = 'complete';
            }
        }
        this.setState({
            items:items
        })
    }
})

export default TodoMVC;