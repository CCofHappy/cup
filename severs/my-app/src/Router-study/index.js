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
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        hashHistory.push(e.key);
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
                    onClick={this.handleClick}
                >
                    <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>杯具桑react的学习</span></span>}>
                        <MenuItemGroup title="学习一">
                            <Menu.Item key="AntdStudy"><Link to="AntdStudy">Antd-Study</Link></Menu.Item>
                            <Menu.Item key="AntdTest"><Link to="AntdTest">Antd-Test</Link></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="学习二">
                            <Menu.Item key="StudentList">Student-List</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </MenuItemGroup>
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
                    <IndexRoute component={StudentList}/>
                    <Route path='AntdTest' component={AntdTest}/>
                    <Route path='AntdStudy' component={AntdStudy}/>
                    <Route path='StudentList' component={StudentList}/>
                </Route>
            </Router>
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
                <Sider history={hashHistory}/>
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