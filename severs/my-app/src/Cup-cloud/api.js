/**
 * Created by Administrator on 2016/11/17.
 */
import request from  'superagent';

const host = 'http://101.200.129.112:9527/';
const GET_FILE = host + 'file/get/';
const RENAME_FILE = host + 'file/rename/';
const NEW_FOLDER = host + 'file/mkdir/';
const REMOVE_FOLDER = host + 'file/remove';

export function getFileList(path,successCB,errorCB) {
    request
        .get(GET_FILE)
        .query({
            path:path
        })
        .end(function (err,res) {
            if(err){return errorCB(err)}
            else if (res){return successCB(res.body)}
        })
}

export function rename(query,successCb,errorCb) {
    request
        .get(RENAME_FILE)
        .query(query)
        .end(function(err,res){
            if(err){return errorCb(err)}
            else if (res){return successCb(res.body)}
        })
}

export function newFolder(query,successCb,errorCb) {
    request
        .get(NEW_FOLDER)
        .query(query)
        .end(function(err,res){
            if(err){return errorCb(err)}
            successCb(res.body);
        })
}

export function remove(query,successCb,errorCb) {
    request
        .get(REMOVE_FOLDER)
        .query(query)
        .end(function (err,res) {
            if (err){return errorCb}
            successCb(res.body)
        })
}