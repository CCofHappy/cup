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
                {text:"aa",id:id()},
                {text:"bb",id:id()},
                {text:"cc",id:id()}
            ],
            value:''
        }
    },

    render:function () {
        return(
            <div className="todo-mvc">
                <h3>tools</h3>
                <TodoList items={this.state.items} onEdit={this.handleEdit} onDelete={this.handleDelete}/>
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
            id:id()
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
        console.log(e.text);
        console.log(e.id);
        var items = this.state.items;
        for (var i = 0;i<items.length;i++ ){
            if (items[i].id == e.id){
                items[i].text = e.text;
                console.log(e.text);
                console.log(e.id);
            }
        }
        this.setState({
            items:items
        })
    }
})

export default TodoMVC;