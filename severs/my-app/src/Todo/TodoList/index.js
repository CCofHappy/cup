import React from 'react'

var TodoList = React.createClass({
    render:function () {
        var that = this;
        var nodes = this.props.items.map(function (e) {
            return(
                <li key={e.id}>
                    <input value={e.text}/>
                    <button onClick={that.delete.bind(that,e)}>删除</button>
                </li>
            )
        });
        return(
            <ul>{nodes}</ul>
        )
    },
    delete:function (e) {
        this.props.onDelete(e);
        console.log(e.id);
    }
});

export default TodoList;