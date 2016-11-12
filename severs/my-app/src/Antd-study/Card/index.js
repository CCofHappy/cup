/**
 * Created by Administrator on 2016/11/12.
 */
import React from 'react';
import './index.css'
var Card = React.createClass({
    render:function () {
        return(
            <div>
                {this.props.children}
            </div>
        )
    },
    getChildContext(){
        return{
            current:this.props.current
        }
    },
    childContextTypes:{
        current:React.PropTypes.number
    }
});
var TitleBar = React.createClass({
    render:function () {
        return(
            <div className="title-bar">
                {this.props.children}
            </div>
        )
    }
});
var Title = React.createClass({
    contextTypes:{
      current:React.PropTypes.number
    },
    render:function () {
        var active = '';
        if (this.props.index == this.context.current){
            active = "active"
        }
        return(
            <div className={active} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
});
var ContentBar = React.createClass({
    render:function () {
        return(
            <div className="content-bar">
                {this.props.children}
            </div>
        )
    }
});
var Content = React.createClass({
    contextTypes:{
        current:React.PropTypes.number
    },
    render:function () {
        var active = '';
        if (this.props.index == this.context.current){
            active = 'block'
        }else {
            active = 'none'
        }
        return(
            <div style={{display:active}}>
                {this.props.children}
            </div>
        )
    }
});

Card.TitleBar = TitleBar;
Card.Title = Title;
Card.ContentBar = ContentBar;
Card.Content = Content;


export default Card;