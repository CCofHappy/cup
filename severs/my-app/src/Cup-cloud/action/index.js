/**
 * Created by Administrator on 2016/12/1.
 */
import React from 'react';
import {Modal,Input} from 'antd'

var action = React.createClass({
    render(){
        const {newValue,onChange,onCancel,showAction}=this.props;
        var title = this.getTitle();
        return(
            <div>
                <Modal
                    title={title}
                    visible={showAction}
                    onCancel={onCancel}
                >
                    <Input value={newValue} onChange={(e)=>onChange(e.target.value)}/>
                </Modal>
            </div>
        )
    },
    getTitle(){
        const {type}=this.props;
        if(type == 'new'){
            return '新建文件'
        }
        if(type == 'copy'){
            return '复制'
        }
        if(type == 'paste'){
            return '黏贴'
        }
        if(type == 'delete'){
            return '删除'
        }
    }
});

export default action;