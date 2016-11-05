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
                <p className="nav">
                    <button onClick={(e)=>this.setState({type:'all'})}
                            className={ this.state.type == 'all' ? 'action' : ''}
                    >ALL</button>
                    <button onClick={(e)=>this.setState({type:'active'})}
                            className={ this.state.type == 'active' ? 'action' : ''}
                    >ACTIVE</button>
                    <button onClick={(e)=>this.setState({type:'complete'})}
                            className={ this.state.type == 'complete' ? 'action' : ''}
                    >COMPLETE</button>
                </p>
                <TodoList
                    items={json}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                    onActive={this.changeActive}
                    onComplete={this.changeComplete}
                />
                <p>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>增加</button>
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
        console.log(e.id);
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