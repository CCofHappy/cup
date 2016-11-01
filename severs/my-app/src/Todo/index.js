import React from 'react';
import TodoList from  './TodoList';

var TodoMVC = React.createClass({
    getInitialState:function(){
        return{
            items:[
                {text:"aa",id:0},
                {text:"bb",id:1},
                {text:"cc",id:2}
            ],
            value:''
        }
    },

    render:function () {
        return(
            <div className="todo-mvc">
                <h3>tools</h3>
                <TodoList items={this.state.items} onDelete={this.handleDelete}/>
                <p>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>提交</button>
                </p>
            </div>
        )
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
            id:items.length
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
    }
})

export default TodoMVC;