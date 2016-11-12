/**
 * Created by Administrator on 2016/11/10.
 */
import React from'react';

var tableTest = React.createClass({
    render:function () {
        var header = this.props.columns,
            data = this.props.dataSource,
            that = this;
        var arr = [];
        var headerNodes = header.map(function (obj) {
            arr.push(obj.dataIndex);
            return(
                <td key={obj.key}>{obj.title}</td>
            )
        });

        var bodyNodes = data.map(function (obj,i) {
            var cols = arr.map(function (h,j) {
                return(
                    <td key={'td'+obj[h]+'-'+j}>{obj[h]}</td>
                )
            });
            return(
                <tr onClick={(e)=>that.props.onRowClick(obj)} key={'tr-'+i}>{cols}</tr>
            )
        });

        return(
            <div>
                <table>
                    <thead>
                        <tr>{headerNodes}</tr>
                    </thead>
                    <tbody>
                        {bodyNodes}
                    </tbody>
                </table>
            </div>
        )
    },
});

export default tableTest;