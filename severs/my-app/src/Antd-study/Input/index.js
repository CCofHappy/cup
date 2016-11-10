/**
 * Created by Administrator on 2016/11/10.
 */
import React from 'react';


var inputText = React.createClass({
    render:function () {
        return(
            <input
                value={this.props.value}
                onChange={this.props.onChange}
                onKeyDown={this.keyDown}
            />
        )
    },
    keyDown:function (e) {
        e.which==13?this.props.onPressEnter(e): null;
    }
});

export default inputText;
