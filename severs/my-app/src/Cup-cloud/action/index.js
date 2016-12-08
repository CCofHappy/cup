/**
 * Created by Administrator on 2016/12/1.
 */
import React from 'react';
import {Modal,Input,message} from 'antd'

var action = React.createClass({
    render(){
        const {newValue,onChange,onCancel,showAction,type}=this.props;
        var title = this.getTitle(),
            contents = this.getContent();
        return(
            <div>
                <Modal
                    title={title}
                    visible={showAction}
                    onCancel={onCancel}
                    onOk={this.getOK}
                >
                    <Input
                        style={{
                            display: type=='new' ? 'block' : 'none'
                        }}
                        value={newValue} onChange={(e)=>onChange(e.target.value)}
                    />{contents}
                </Modal>
            </div>
        )
    },
    getContent(){
        const {type}=this.props;
        if(type == 'new'){
            return '';
        }
        if(type == 'copy'){
            return '复制成功'
        }
        if(type == 'paste'){
            return '黏贴'
        }
        if(type == 'delete'){
            return '您确定要删除该文件？'
        }
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
        const {type,onNewFolder,newValue,file,onRemoveFolder,active}=this.props;
        if(type=='new'){
            var ok = true;
            for (var i=0 ;i<file.length;i++){
                if (file[i].name == newValue){
                    ok = false;
                }
            }
            if(ok){
                return onNewFolder(newValue);
            }else {
                message.error('文件名字重复！');
            }
        }else if (type=='copy'){

        }else if (type=='paste'){

        }else if (type=='delete'){
            return onRemoveFolder();
        }


    }
});

export default action;