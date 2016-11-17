/**
 * Created by Administrator on 2016/11/17.
 */
import React from 'react';

var FileList = React.createClass({
    render:function () {
        var nodes = this.props.file.map(function (obj) {
           return(
               <li>
                   <span>{obj.name}</span>
               </li>
           )
        });
        return(
            <div>
                <h3>file-list</h3>
                <ul>
                    {nodes}
                </ul>
            </div>
        )
    }
});

export default FileList;