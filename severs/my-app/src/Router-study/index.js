/**
 * Created by Administrator on 2016/11/15.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory,IndexRoute,Redirect,Link,IndexLink} from 'react-router';
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = React.createClass({
    getInitialState() {
        return {
            mode: 'inline ',
            theme:'light'
        };
    },
    changeMode(value) {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    },
    changeTheme(value){
        this.setState({
            theme: value ? 'dark' : 'light'
        })
    },
    render() {
        return (
            <div className="all-nav">
                <Switch onChange={this.changeMode} /><span>切换模式</span>&nbsp;&nbsp;
                <Switch onChange={this.changeTheme} /><span>切换黑白</span>
                <br />
                <br />
                <Menu
                    style={{ width: 200 }}
                    defaultOpenKeys={['sub1']}
                    mode={this.state.mode}
                    theme={this.state.theme}
                >
                    <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>杯具桑react的学习</span></span>}>
                        <Menu.Item><Link activeStyle={{color:'#2db7f5'}} to="Student">Student</Link></Menu.Item>
                        <Menu.Item><Link activeStyle={{color:'#2db7f5'}} to="Study">Antd-Study</Link></Menu.Item>
                        <Menu.Item><Link activeStyle={{color:'#2db7f5'}} to="Test">Antd-Test</Link></Menu.Item>
                        <Menu.Item><Link activeStyle={{color:'#2db7f5'}} to="List">Student-List</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    },
});

const Content = React.createClass({
    render:function(){
        return(
            <div className="content-box">
            <Router history={hashHistory}>
                <Route path='/' component={Index}>
                    <IndexRoute component={Student}/>
                    <Route path='/Student' component={Student}/>
                    <Route path='/Test' component={AntdTest}/>
                    <Route path='/Study' component={AntdStudy}/>
                    <Route path='/List' component={StudentList}/>
                </Route>
            </Router>
            </div>
        )
    }
});

const Student = React.createClass({
    render:function(){
        return(
            <div>
                Student
            </div>
        )
    }
});

const StudentList = React.createClass({
    render:function(){
        return(
            <div>
                StudentList
            </div>
        )
    }
});

const AntdStudy = React.createClass({
    render:function(){
        return(
            <div>
                AntdStudy
            </div>
        )
    }
});

const AntdTest = React.createClass({
    render:function(){
        return(
            <div>
                AntdTest
            </div>
        )
    }
});

const Index = React.createClass({
    render:function(){
        return(
            <div className="index">
                <Sider/>
                Index
                {this.props.children}
            </div>
        )
    }
});

const RouterStudy = React.createClass({
    render:function(){
        return(
            <div>
                <h3>react-router</h3>
                <Content/>
            </div>
        )
    }
});

export default RouterStudy;