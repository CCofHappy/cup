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
        if(type == 'delete'){
            return '您确定要删除该文件？'
        }
    },
    getTitle(){
        const {type}=this.props;
        if(type == 'new'){
            return '新建文件';
        }
        if(type == 'delete'){
            return '删除'
        }
    },
    getOK(){
        const {handleAction}=this.props;
        return handleAction();
    }
});

export default action;