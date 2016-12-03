/**
 * Created by Administrator on 2016/12/1.
 */
import React from 'react';
import {Modal,Input,message} from 'antd'

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
                    onOk={this.getOK}
                >
                    <Input value={newValue} onChange={(e)=>onChange(e.target.value)}/>
                </Modal>
            </div>
        )
    },
    getTitle(){
        const {type}=this.props;
        if(type == 'new'){
            return '新建文件';
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
    },
    getOK(){
        const {type,onNewFolder,newValue,file}=this.props;
        var ok = true;
        for (var i=0 ;i<file.length;i++){
            if (file[i].name == newValue){
                ok = false;
            }
        }
        if(type == 'new' && ok){
            return onNewFolder(newValue);
        }else {
            message.error('文件名字重复！');
        }

    }
});

export default action;