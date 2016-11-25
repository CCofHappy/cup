/**
 * Created by Administrator on 2016/11/25.
 */
import React from 'react';
import {Breadcrumb,Icon} from 'antd'
import {Link} from 'react-router'

var Nav = React.createClass({
    render(){
        const {path} = this.props;
        var to = '';
        var nodes = path.map(function (o,i) {
            to = to+'/'+o;
            return(
                <Breadcrumb.Item key={i}>
                    <Link to={to}>{o}</Link>
                </Breadcrumb.Item>
            )}
        );
        return(
            <div className="nav-body">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={'/'}>
                            <Icon type='home'/>home
                        </Link>
                    </Breadcrumb.Item>
                    {nodes}
                </Breadcrumb>
            </div>
        )
    }
});

export default Nav;